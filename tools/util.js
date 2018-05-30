let regFilter = /ngModule\.filter[\W\w]+\);/g;
let regService = /ngModule\.service[\W\w]+\);/g;
let regDirective = /ngModule\.directive[\W\w]+\);/g;
let regComponent = /[\W\w]+export default function routing\(\$urlRouterProvider, \$locationProvider,\$stateProvider\) {/g;

export let regImport = /import[\W\w]+';/g;
export let regExportDefault = /export default function\(ngModule\) \{[\W\w]+\);\r\n}/g;
export let regExportRouter = /export default function routing\(\$urlRouterProvider[\W\w]+\}/g;

function firstToUpperCase(str) {
  return str.substring(0,1).toUpperCase() + str.substring(1);
}
export function regExportDefaults(type) {
  if(type==='components') {
    return regExportRouter;
  } else {
    return regExportDefault;
  }
}
export function returnRegExport(type) {
  if(type==='filter') {
    return regFilter;
  } else if(type==='module' || type==='services') {
    return regService;
  } else if (type==='directives') {
    return regDirective;
  } else if (type==='components') {
    return regComponent;
  }
}
export function importTmpls(dirName,type) {
  let Type = firstToUpperCase(type);
  if(type==='components') {
    return `\r\nimport ${dirName}Router from './components/${type}-${dirName}/router';`;
  } else {
    return `\r\nimport ${dirName+Type} from './${type}-${dirName}/index';`;
  }
}
export function exportTmpls(dirName,type) {
  let Type = firstToUpperCase(type);
  if(type==='filter') {
    return `\r\n  ngModule.filter('${dirName}', ${dirName + Type});`;
  } else if(type==='module' || type==='services') {
    return `\r\n  ngModule.service('$${dirName}', ${dirName + Type});`;
  } else if(type==='directives') {
    return `\r\n  ngModule.directive('${dirName}', ${dirName + Type});`;
  } else if(type==='components') {
    return `  $stateProvider.state('${dirName}',${dirName}Router);`;
  } 
}
