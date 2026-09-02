import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import {root,createIncrementalCopy} from './incremental.mjs';
import {loadPage} from './dom-harness.mjs';
import * as fixture from './fixture-37.mjs';
const digest=x=>crypto.createHash('sha256').update(x).digest('hex');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const baseline=JSON.parse(read('tests/baseline.json'));
function data(page){return JSON.parse(page.run('JSON.stringify({articles,archivedArticles,archivedSummaries,words,speakingCards,expressions})'));}
test('true separation: external data, stylesheet and runtime; frozen UI and data',()=>{
 const html=read('index.html'),p=loadPage(root);
 assert.doesNotMatch(html,/<style\b|<script(?![^>]*\bsrc=)|const (articles|words|speakingCards|expressions)/);
 assert.deepEqual(p.scripts,['./data/articles.js','./data/words.js','./data/speaking.js','./data/expressions.js','./js/app.js']);
 assert.equal((html.match(/<script defer src=/g)||[]).length,5);
 for(const [file,hash] of Object.entries(baseline.frozenFiles))assert.equal(digest(read(file)),hash,file+' changed');
 assert.equal(digest(JSON.stringify(data(p))),baseline.dataSha256);
 assert.doesNotMatch(read('js/app.js'),/const (articles|words|speakingCards|expressions)\s*=/);
});
test('36 archive cards; Words and Speaking counts match source arrays',()=>{
 const p=loadPage(root),d=data(p);
 p.context.show('articles');assert.ok(!p.get('articles').classList.contains('hidden'));
 assert.equal(p.cards('articleList'),36);assert.equal(p.get('articleCount').textContent,d.articles.length);
 assert.equal(p.cards('wordList'),d.words.length);assert.equal(d.words.length,107);
 assert.equal(p.get('wordCount').textContent,d.words.length);
 assert.equal(p.cards('speakingList'),d.speakingCards.length);assert.equal(d.speakingCards.length,36);
 assert.equal(p.get('speakingCount').textContent,d.speakingCards.length);
});
test('all 35 historical bodies and Chinese summaries load; #1 missing-text notice preserved',()=>{
 const p=loadPage(root),d=data(p);let checked=0;
 for(const a of d.articles){p.context.openArticle(a.n);assert.ok(!p.get('reader').classList.contains('hidden'));if(a.n===1){assert.match(p.get('readerContent').innerHTML,/还没有找到它的历史全文/);}else{assert.ok(p.get('readerContent').innerHTML.includes(d.archivedArticles[a.n]));assert.ok(p.get('readerContent').innerHTML.includes(d.archivedSummaries[a.n]));checked++;}p.context.closeArticle();assert.ok(p.get('reader').classList.contains('hidden'));}
 assert.equal(checked,35);
});
test('article search and empty result state',()=>{
 const p=loadPage(root);p.get('articleSearch').value='Why Index Funds';p.context.renderArticles();assert.equal(p.cards('articleList'),1);assert.match(p.get('articleList').innerHTML,/#2 ·/);
 p.get('articleSearch').value='__no_match__';p.context.renderArticles();assert.equal(p.cards('articleList'),0);
 p.get('articleSearch').value='';p.context.renderArticles();assert.equal(p.cards('articleList'),36);
});
test('Random Review displays valid article ideas and Speaking questions',()=>{
 const p=loadPage(root),d=data(p),values=new Set([...d.articles.map(a=>a.idea),...d.speakingCards.map(c=>c.q)]);
 // Exercise both endpoints deterministically, then restore real randomness.
 p.run('Math.random=()=>0');p.context.randomReview();assert.equal(p.get('randomText').textContent,d.articles[0].idea);
 p.run('Math.random=()=>0.999999');p.context.randomReview();assert.equal(p.get('randomText').textContent,d.speakingCards.at(-1).q);
 assert.ok(values.has(p.get('randomText').textContent));
});
test('article save state persists across reload and can be toggled off',()=>{
 const storage=new Map([['del-saved-articles','{"2":true}']]);let p=loadPage(root,storage);
 p.context.openArticle(2);assert.equal(p.get('saveArticle').textContent,'★ Saved');p.context.openArticle(36);p.context.toggleArticleSave();
 p=loadPage(root,storage);p.context.openArticle(36);assert.equal(p.get('saveArticle').textContent,'★ Saved');p.context.toggleArticleSave();
 p=loadPage(root,storage);p.context.openArticle(36);assert.equal(p.get('saveArticle').textContent,'☆ Save');p.context.openArticle(2);assert.equal(p.get('saveArticle').textContent,'★ Saved');
});
test('word mastery, favorites, search and all type filters persist/work',()=>{
 const storage=new Map();let p=loadPage(root,storage),d=data(p);
 p.context.cycle('proxy');assert.equal(p.context.stateText('proxy'),'~ 模糊');p.context.cycle('proxy');p.context.toggleSave('proxy');
 p=loadPage(root,storage);assert.equal(p.context.stateText('proxy'),'✓ 认识');assert.match(p.get('wordList').innerHTML,/★/);
 p.context.setType('saved',p.filters()[1]);assert.match(p.get('wordList').innerHTML,/proxy/);
 for(const t of ['vocab','academic','proper','all']){p.context.setType(t,p.filters()[1]);assert.equal(p.cards('wordList'),d.words.filter(w=>t==='all'||w.type===t).length);}
 p.get('wordSearch').value='proxy';p.context.renderWords();assert.ok(p.cards('wordList')>0);p.get('wordSearch').value='__no_match__';p.context.renderWords();assert.equal(p.cards('wordList'),0);
 p.context.cycle('proxy');p.context.toggleSave('proxy');p=loadPage(root,storage);assert.equal(p.context.stateText('proxy'),'? 不认识');p.context.setType('saved',p.filters()[1]);assert.equal(p.cards('wordList'),0);
});
test('Speaking reveal/hide and category filters',()=>{
 const p=loadPage(root),d=data(p);assert.ok(p.get('answer-0').classList.contains('hidden'));
 p.context.toggleAnswer(0);assert.ok(!p.get('answer-0').classList.contains('hidden'));assert.equal(p.get('reveal-0').textContent,'Hide answer ↑');
 p.context.toggleAnswer(0);assert.ok(p.get('answer-0').classList.contains('hidden'));assert.equal(p.get('reveal-0').textContent,'Reveal answer ↓');
 for(const cat of ['Finance','Psychology','all']){p.context.setSpeakingType(cat,p.filters()[1]);assert.equal(p.cards('speakingList'),d.speakingCards.filter(c=>cat==='all'||c.cat===cat).length);assert.ok(p.get('answer-0').classList.contains('hidden'));}
});
test('Auto/Light/Dark persisted choice and fixed Lamp B 0.12',()=>{
 const storage=new Map();let p=loadPage(root,storage);
 for(const choice of ['light','dark','auto']){p.context.setTheme(choice);assert.equal(p.documentElement.getAttribute('data-theme'),choice==='auto'?null:choice);assert.equal(storage.get('readingTheme'),choice);assert.ok(p.themes.find(b=>b.dataset.themeChoice===choice).classList.contains('active'));p=loadPage(root,storage);assert.equal(p.documentElement.getAttribute('data-theme'),choice==='auto'?null:choice);assert.equal(p.documentElement.getAttribute('data-glow'),'b');}
 assert.match(read('css/app.css'),/html\[data-glow="b"\]\{--glow-alpha:\.12;--glow-blur:38px\}/);
 assert.match(read('css/app.css'),/@media\s*\(prefers-color-scheme:dark\)/);
});
test('#37 changes only three data files; counts, archive, body, summary, word and Speaking update',()=>{
 const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'english-v6-incremental-'));
 try{
  createIncrementalCopy(tmp);
  for(const p of ['index.html','css/app.css','js/app.js','data/expressions.js'])assert.equal(fs.readFileSync(path.join(tmp,p),'utf8'),read(p),p+' must not change');
  for(const p of ['data/articles.js','data/words.js','data/speaking.js'])assert.notEqual(fs.readFileSync(path.join(tmp,p),'utf8'),read(p));
  const p=loadPage(tmp),old=data(loadPage(root)),d=data(p);
  assert.equal(p.get('articleCount').textContent,37);assert.equal(p.get('wordCount').textContent,108);assert.equal(p.get('speakingCount').textContent,37);assert.equal(p.cards('articleList'),37);
  assert.equal(p.get('archiveDescription').textContent,'37 articles · 36 full texts · 36 Chinese summaries');
  p.get('articleSearch').value=fixture.article.title;p.context.renderArticles();assert.equal(p.cards('articleList'),1);assert.match(p.get('articleList').innerHTML,/#37 ·/);
  p.context.openArticle(37);assert.ok(p.get('readerContent').innerHTML.includes(fixture.body));assert.ok(p.get('readerContent').innerHTML.includes(fixture.summary));
  assert.ok(p.get('wordList').innerHTML.includes(fixture.word.w));assert.ok(p.get('speakingList').innerHTML.includes(fixture.speaking.q));
  for(const key of ['articles','words','speakingCards'])assert.deepEqual(d[key].slice(0,old[key].length),old[key]);
  assert.deepEqual(d.expressions,old.expressions);
  for(const key of ['archivedArticles','archivedSummaries'])for(const n of Object.keys(old[key]))assert.equal(d[key][n],old[key][n]);
 }finally{fs.rmSync(tmp,{recursive:true,force:true});}
});
