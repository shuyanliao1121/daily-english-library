import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const args=process.argv.slice(2);
const write=args.includes('--write');
const fileArg=args.find(a=>!a.startsWith('--'));
if(!fileArg){console.error('Usage: node scripts/import-daily.mjs imports/daily-037.json [--write]');process.exit(2)}
const importPath=path.resolve(root,fileArg);
const pack=JSON.parse(fs.readFileSync(importPath,'utf8'));
const fail=m=>{throw new Error(m)};
const text=(v,n)=>{if(typeof v!=='string'||!v.trim())fail(`${n} must be a non-empty string`)};

if(pack.version!==1)fail('version must be 1');
if(!Number.isInteger(pack.articleNumber))fail('articleNumber must be an integer');
for(const k of ['article','words','speaking','expressions'])if(pack[k]===undefined)fail(`missing ${k}`);

const a=pack.article;
if(!a||a.n!==pack.articleNumber)fail('article.n must equal articleNumber');
for(const k of ['title','category','framework','coreIdea','body','summaryZh'])text(a[k],`article.${k}`);
if(!Array.isArray(a.themes))fail('article.themes must be an array');
if(!Array.isArray(pack.words)||!Array.isArray(pack.speaking)||!Array.isArray(pack.expressions))fail('words/speaking/expressions must be arrays');

const allowed=new Set(['vocab','academic','proper']);
for(const [i,w] of pack.words.entries()){
  for(const k of ['word','meaningZh','example'])text(w[k],`words[${i}].${k}`);
  if(!allowed.has(w.type))fail(`words[${i}].type invalid`);
  if(w.source!==pack.articleNumber)fail(`words[${i}].source mismatch`);
}
for(const [i,s] of pack.speaking.entries()){
  for(const k of ['question','category','framework','response'])text(s[k],`speaking[${i}].${k}`);
  if(s.source!==pack.articleNumber)fail(`speaking[${i}].source mismatch`);
  if(!Array.isArray(s.expressions)||s.expressions.some(x=>typeof x!=='string'||!x.trim()))fail(`speaking[${i}].expressions must contain non-empty strings`);
}
if(pack.speaking.length<1)fail('at least one Speaking card is required');
for(const [i,e] of pack.expressions.entries()){
  text(e.expression,`expressions[${i}].expression`);
  if(e.meaningZh!==undefined)text(e.meaningZh,`expressions[${i}].meaningZh`);
  if(e.source!==pack.articleNumber)fail(`expressions[${i}].source mismatch`);
}

function loadData(){
  const ctx={}; vm.createContext(ctx);
  for(const p of ['data/articles.js','data/words.js','data/speaking.js','data/expressions.js']){
    vm.runInContext(fs.readFileSync(path.join(root,p),'utf8')+`
;globalThis.__x={
articles:typeof articles==='undefined'?globalThis.__x?.articles:articles,
archivedArticles:typeof archivedArticles==='undefined'?globalThis.__x?.archivedArticles:archivedArticles,
archivedSummaries:typeof archivedSummaries==='undefined'?globalThis.__x?.archivedSummaries:archivedSummaries,
words:typeof words==='undefined'?globalThis.__x?.words:words,
speakingCards:typeof speakingCards==='undefined'?globalThis.__x?.speakingCards:speakingCards,
expressions:typeof expressions==='undefined'?globalThis.__x?.expressions:expressions};`,ctx);
  }
  return ctx.__x;
}

function assertIntegrity(d,label='data'){
  if(!Array.isArray(d.articles)||!d.articles.length)fail(`${label}: articles missing`);
  const nums=d.articles.map(x=>x.n);
  if(nums.some(n=>!Number.isInteger(n)))fail(`${label}: invalid article number`);
  if(new Set(nums).size!==nums.length)fail(`${label}: duplicate article number`);
  const sorted=[...nums].sort((x,y)=>x-y);
  for(let i=0;i<sorted.length;i++)if(sorted[i]!==i+1)fail(`${label}: article sequence must be continuous from #1`);
  const articleSet=new Set(nums);
  for(const n of nums){
    const row=d.articles.find(x=>x.n===n);
    for(const k of ['title','cat','framework','idea'])text(row[k],`${label}: article #${n}.${k}`);
    if(n>=2){
      text(d.archivedArticles?.[n],`${label}: archived article #${n}`);
      text(d.archivedSummaries?.[n],`${label}: archived summary #${n}`);
    }
  }
  if(!Array.isArray(d.words))fail(`${label}: words missing`);
  for(const [i,w] of d.words.entries()){
    for(const k of ['w','zh','type','ex','src'])text(w[k],`${label}: words[${i}].${k}`);
    if(!allowed.has(w.type))fail(`${label}: words[${i}].type invalid`);
    const n=Number(String(w.src).replace(/^#/,''));
    if(!articleSet.has(n))fail(`${label}: words[${i}] points to missing article ${w.src}`);
  }
  if(!Array.isArray(d.speakingCards))fail(`${label}: speakingCards missing`);
  const qs=new Set();
  for(const [i,s] of d.speakingCards.entries()){
    for(const k of ['src','cat','framework','q','answer'])text(s[k],`${label}: speaking[${i}].${k}`);
    if(!Array.isArray(s.expr))fail(`${label}: speaking[${i}].expr invalid`);
    const q=s.q.trim().toLowerCase();
    if(qs.has(q))fail(`${label}: duplicate Speaking question`);
    qs.add(q);
    const n=Number(String(s.src).replace(/^#/,''));
    if(!articleSet.has(n))fail(`${label}: speaking[${i}] points to missing article ${s.src}`);
  }
  if(!Array.isArray(d.expressions))fail(`${label}: expressions missing`);
  for(const [i,e] of d.expressions.entries()){
    if(!Array.isArray(e)||e.length<2)fail(`${label}: expressions[${i}] invalid`);
    text(e[0],`${label}: expressions[${i}][0]`);
    text(e[1],`${label}: expressions[${i}][1]`);
    const n=Number(String(e[1]).replace(/^#/,''));
    if(!articleSet.has(n))fail(`${label}: expressions[${i}] points to missing article ${e[1]}`);
  }
}

const d=loadData();
assertIntegrity(d,'pre-import');
const max=Math.max(...d.articles.map(x=>x.n));
if(pack.articleNumber!==max+1)fail(`articleNumber must be ${max+1}; current max is ${max}`);
if(d.articles.some(x=>x.n===pack.articleNumber))fail('duplicate article number');

const existingWords=new Set(d.words.map(x=>x.w.toLowerCase()));
const dupWords=pack.words.filter(w=>existingWords.has(w.word.toLowerCase())).map(w=>w.word);
const existingQs=new Set(d.speakingCards.map(x=>x.q.toLowerCase()));
const dupQs=pack.speaking.filter(s=>existingQs.has(s.question.toLowerCase())).map(s=>s.question);

console.log(`Daily English Library — Import Preview #${pack.articleNumber}`);
console.log(`Article: 1 — ${a.title}`);
console.log(`Words: ${pack.words.length}`);
console.log(`Speaking cards: ${pack.speaking.length}`);
console.log(`Expressions: ${pack.expressions.length}`);
if(dupWords.length)console.log(`Warning: existing words: ${dupWords.join(', ')}`);
if(dupQs.length)fail(`duplicate Speaking question: ${dupQs.join(' | ')}`);
if(!write){console.log('\nPreview only. Re-run with --write to import.');process.exit(0)}

const files=['data/articles.js','data/words.js','data/speaking.js','data/expressions.js'];
const before=Object.fromEntries(files.map(p=>[p,fs.readFileSync(path.join(root,p),'utf8')]));
const j=x=>JSON.stringify(x,null,2);
const article={n:a.n,title:a.title,cat:a.category,framework:a.framework,idea:a.coreIdea};
const words=pack.words.map(w=>({w:w.word,zh:w.meaningZh,type:w.type,ex:w.example,src:`#${w.source}`}));
const speaking=pack.speaking.map(s=>({src:`#${s.source}`,cat:s.category,framework:s.framework,q:s.question,answer:s.response,expr:s.expressions}));
const expressions=pack.expressions.map(e=>[e.expression,`#${e.source}`]);
const additions={
  'data/articles.js':`\n\n// Imported Article #${a.n}\narticles.push(${j(article)});\narchivedArticles[${a.n}]=${j(a.body)};\narchivedSummaries[${a.n}]=${j(a.summaryZh)};\n`,
  'data/words.js':`\n\n// Imported Article #${a.n}\nwords.push(...${j(words)});\n`,
  'data/speaking.js':`\n\n// Imported Article #${a.n}\nspeakingCards.push(...${j(speaking)});\n`,
  'data/expressions.js':`\n\n// Imported Article #${a.n}\nexpressions.push(...${j(expressions)});\n`
};

try{
  for(const p of files)fs.appendFileSync(path.join(root,p),additions[p]);
  for(const p of files){
    const r=spawnSync(process.execPath,['--check',path.join(root,p)],{encoding:'utf8'});
    if(r.status!==0)fail(`syntax check failed for ${p}: ${r.stderr}`);
  }
  const post=loadData();
  assertIntegrity(post,'post-import');
  if(post.articles.length!==d.articles.length+1)fail('post-import article count mismatch');
  if(!post.articles.some(x=>x.n===a.n)||!post.archivedArticles[a.n]||!post.archivedSummaries[a.n])fail('post-import article verification failed');
  if(post.words.length!==d.words.length+pack.words.length)fail('post-import word count mismatch');
  if(post.speakingCards.length!==d.speakingCards.length+pack.speaking.length)fail('post-import Speaking count mismatch');
  if(post.expressions.length!==d.expressions.length+pack.expressions.length)fail('post-import expression count mismatch');
  console.log('\nIMPORT SUCCESS');
  console.log(`Article #${a.n} added; dynamic integrity, syntax and post-import checks passed.`);
}catch(err){
  for(const p of files)fs.writeFileSync(path.join(root,p),before[p]);
  console.error('\nIMPORT FAILED — rolled back all data files.');
  throw err;
}
