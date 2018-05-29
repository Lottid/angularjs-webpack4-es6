import { makeDir, rewrite } from './app';

let path = require('path');

let argv = process.argv.splice(2),
  newDirName = argv[1] || 'tmpl',
  type = argv[0],
  rootDir = path.resolve(__dirname, '../');

let newDir = path.join(rootDir, `src/${type}/${type}-${newDirName}`);
let filterDir = path.join(rootDir, `src/${type}/index.js`);
if (type === 'components') {
  filterDir = path.join(rootDir, `src/app.config.js`);
}

// console.log(rootDir,'rootDir');
// console.log('type',type);
// console.log('newDirName', newDirName);
// console.log('newDir', newDir);
// console.log(!fs.existsSync(newDir),'fs.existsSync(newDir)');
if (type) {
  makeDir(newDir,rootDir,newDirName,type);
  rewrite(filterDir, newDirName, type);
} else {
  console.log('未定义生成类型！');
}




