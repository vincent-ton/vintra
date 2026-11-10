import {mkdir,copyFile,cp,rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
process.chdir(fileURLToPath(new URL('..',import.meta.url)));
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});await copyFile('index.html','dist/index.html');await cp('src','dist/src',{recursive:true});await cp('assets','dist/assets',{recursive:true});await copyFile('.nojekyll','dist/.nojekyll');console.log('Built static app. Relative assets and hash routes support /vintra/. No service worker, API or runtime dependencies.');
