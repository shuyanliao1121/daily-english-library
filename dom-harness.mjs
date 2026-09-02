// Minimal DOM model for deterministic script regression. Not a browser substitute.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
export function loadPage(root,storage=new Map(),systemDark=false){
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const elements=new Map();
 class Element{
  constructor(id='',classes=''){this.id=id;this.value='';this.textContent='';this.innerHTML='';this.style={};this.dataset={};this.attributes={};this.tokens=new Set(classes.split(/\s+/).filter(Boolean));this.classList={add:x=>this.tokens.add(x),remove:x=>this.tokens.delete(x),contains:x=>this.tokens.has(x),toggle:(x,force)=>{const add=force===undefined?!this.tokens.has(x):force;add?this.tokens.add(x):this.tokens.delete(x);return add;}};}
  set innerHTML(value){this._html=value;for(const m of value.matchAll(/<[^>]+\bid="([^"]+)"[^>]*>/g)){const e=get(m[1]);const c=m[0].match(/class="([^"]*)"/);e.tokens.clear();if(c)c[1].split(/\s+/).forEach(x=>e.tokens.add(x));}}
  get innerHTML(){return this._html||'';}
  setAttribute(k,v){this.attributes[k]=v;}removeAttribute(k){delete this.attributes[k];}getAttribute(k){return this.attributes[k]??null;}
 }
 const get=id=>{if(!elements.has(id))elements.set(id,new Element(id));return elements.get(id);};
 for(const match of html.matchAll(/<[^>]+\bid="([^"]+)"[^>]*>/g)){const el=get(match[1]);const c=match[0].match(/class="([^"]*)"/);if(c)c[1].split(/\s+/).forEach(x=>el.classList.add(x));}
 const sections=['today','articles','words','ideas'].map(get);
 const nav=sections.map(x=>{const e=new Element();e.dataset.id=x.id;return e;});
 const themes=['auto','light','dark'].map(x=>{const e=new Element();e.dataset.themeChoice=x;return e;});
 const filters=()=>{const buttons=[new Element('', 'filter active'),new Element('', 'filter'),new Element('', 'filter')];buttons.forEach(b=>b.parentElement={querySelectorAll:()=>buttons});return buttons;};
 const documentElement=new Element();documentElement.setAttribute('data-glow','b');
 const document={body:new Element(),documentElement,getElementById:get,querySelectorAll:s=>s==='main>section'?sections:s==='.nav'?nav:s==='[data-theme-choice]'?themes:[]};
 const context={document,localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,String(v))},scrollTo(){},matchMedia:()=>({matches:systemDark})};
 for(const [id,el] of elements)context[id]=el;
 vm.createContext(context);
 const scripts=[...html.matchAll(/<script\b[^>]*src="([^"]+)"[^>]*><\/script>/g)].map(x=>x[1]);
 for(const file of scripts)vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
 const run=code=>vm.runInContext(code,context);
 function cards(id){return (get(id).innerHTML.match(/class="card(?: |")/g)||[]).length;}
 return {context,storage,get,run,cards,themes,filters,documentElement,scripts};
}
