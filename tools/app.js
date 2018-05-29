import {componentsmpl,componentsmplController,componentsmplRouter,directiveTmpl,filterTmpl,moduleTmpl,servicesTmpl} from './tmpls';
import {importTmpls,exportTmpls,regImport,regExportDefaults,returnRegExport} from './util';

let fs = require('fs');
let path = require('path');

export function makeDir(dir,rootDir,dirName,type) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    let newPath = dir + '/index.js';
    if(type==='filter') {
      fs.writeFileSync(newPath, filterTmpl(dirName));
    } else if(type==='module') {
      fs.writeFileSync(newPath, moduleTmpl(dirName));
    } else if(type==='services') {
      fs.writeFileSync(newPath, servicesTmpl(dirName));
    } else if(type==='directives') {
      let imgDir = dir + '/img';
      let newHtml= dir + '/index.html';
      let newLess= dir + '/index.less';
      fs.mkdirSync(imgDir);
      fs.writeFileSync(newPath, directiveTmpl(dirName));
      fs.writeFileSync(newHtml,'');
      fs.writeFileSync(newLess,'');
    }else if(type==='components') {
      let imgDir = dir + '/img';
      let newHtml= dir + '/app.html';
      let newLess= dir + '/app.less';
      let newController= dir + '/controller.js';
      let router= dir + '/router.js';
      fs.mkdirSync(imgDir);
      fs.writeFileSync(newPath, componentsmpl(dirName));
      fs.writeFileSync(newHtml,'');
      fs.writeFileSync(newLess,'');
      fs.writeFileSync(newController, componentsmplController(dirName));
      fs.writeFileSync(router, componentsmplRouter(dirName));
    }
  } else {
    if (dirName === 'tmpl') {
      rmdirsSync(dir);
      makeDir(dir,rootDir,dirName,type);
    } else {
      console.log(`${path.relative(rootDir, dir)} is already!`);
    }
  }
}
export function rewrite(path,dirName,type) {
  let content = fs.readFileSync(path, 'utf8');
  // console.log('=============old================');
  // console.log(content);
  let importTmpl = importTmpls(dirName,type);
  let exportTmpl = exportTmpls(dirName,type);

  let regExport = returnRegExport(type);
  let regExportDefault = regExportDefaults(type);
  
  let imports = content.match(regImport);
  let exports = content.match(regExport);
  let newContent = content.replace(regImport,'').replace(regExportDefault,'');
  if(type==='components') {
    exports = content.replace(regExport,'');
    // console.log('=============exports================');
    // console.log(exports.substring(0,exports.length-1));
    // console.log('=============newContent================');
    // console.log(newContent);
    exports = exports.substring(0,exports.length-1) + exportTmpl;
    if(imports.join('').indexOf(importTmpl)===-1&&exports.indexOf(exportTmpl)) {
      imports.push(importTmpl);
      // exports.push(exportTmpl);
      // console.log('=============imports================');
      // console.log(imports.join(''));
      let res = imports.join('') + newContent + `export default function routing($urlRouterProvider, $locationProvider,$stateProvider) {  ${exports}\r\n}`;
      // console.log('=============res================');
      // console.log(res);
      fs.writeFileSync(path, res);
    } else {
      console.error('该文件已经存在');
    }
  } else {
    if(imports.join('').indexOf(importTmpl)===-1&&exports.join('').indexOf(exportTmpl)) {
      imports.push(importTmpl);
      exports.push(exportTmpl);

      let res = imports.join('') + newContent + `export default function(ngModule) {\r\n  ${exports.join('')}\r\n}`;
      console.log('=============new================');
      // console.log(res);
      fs.writeFileSync(path, res);
    } else {
      console.error('该文件已经存在');
    }
  }
}

function rmdirsSync(targetPath) {
  try {
    let files = [];
    if (fs.existsSync(targetPath)) {
      files = fs.readdirSync(targetPath);
      files.forEach(function(file) {
        let curPath = targetPath + '/' + file;
        if (fs.statSync(curPath).isDirectory()) {
          if (!rmdirsSync(curPath)) return false;
        } else {
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(targetPath);
    } else {
      fs.rmdirSync(targetPath);
    }
  } catch (e) {
    return false;
  }
  return true;
}