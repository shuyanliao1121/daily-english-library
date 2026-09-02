import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import * as fixture from './fixture-37.mjs';
export const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const updates={
 'data/articles.js':`\n// TEST ONLY — Article 37\narticles.push(${JSON.stringify(fixture.article)});\narchivedArticles[37]=${JSON.stringify(fixture.body)};\narchivedSummaries[37]=${JSON.stringify(fixture.summary)};\n`,
 'data/words.js':`\n// TEST ONLY — Article 37\nwords.push(${JSON.stringify(fixture.word)});\n`,
 'data/speaking.js':`\n// TEST ONLY — Article 37\nspeakingCards.push(${JSON.stringify(fixture.speaking)});\n`
};
export function createIncrementalCopy(destination){
 fs.mkdirSync(destination,{recursive:true});
 for(const p of ['index.html','css','js','data'])fs.cpSync(path.join(root,p),path.join(destination,p),{recursive:true});
 for(const [p,text] of Object.entries(updates))fs.appendFileSync(path.join(destination,p),text);
 return destination;
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 if(!process.argv[2])throw new Error('Provide a new destination outside the project');
 const target=path.resolve(process.argv[2]);
 if(fs.existsSync(target)||target.startsWith(root+path.sep))throw new Error('Destination must be a new directory outside the project');
 createIncrementalCopy(target);console.log('Created test copy: '+target);
}
