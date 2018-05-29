export function componentsmpl(newDirName) {
  return `import './app.less';
import angular from 'angular';
import ${newDirName}Controller from './controller.js';

export default angular.module('myApp.${newDirName}', [])
  .controller('${newDirName}Controller', ${newDirName}Controller)
  .name;`;
}
export function componentsmplController(newDirName) {
  return `class ${newDirName}Controller {
  constructor($scope) {
    console.log($scope);
  }
}
${newDirName}Controller.$inject = ['$scope'];
export default ${newDirName}Controller;`;
}
export function componentsmplRouter(newDirName) {
  return `export default {
  url: '/${newDirName}',
  templateProvider: ['$q', function($q) {
    let deferred = $q.defer();
    require.ensure([], function() {
      let template = require('./app.html');
      deferred.resolve(template);
    });
    return deferred.promise;
  }],
  controller: '${newDirName}Controller',
  resolve: {
    load: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
      let deferred = $q.defer();
      require.ensure([], function() {
        let module = require('./index.js');
        $ocLazyLoad.load({
          name: 'myApp.${newDirName}'
        });
        deferred.resolve(module);
      });

      return deferred.promise;
    }]
  }
};`;
}

export function directiveTmpl(newDirName) {
  return `import './index.less';
import template from './index.html';

// resctrict
// E 作为元素名使用
// A 作为属性使用
// C 作为类名使用
// M 作为注释使用
// scope
// @：单向绑定，外部scope能够影响内部scope，但反过来不成立
// =：双向绑定，外部scope和内部scope的model能够相互改变
// &：把内部scope的函数的返回值和外部scope的任何属性绑定起来

function ${newDirName}Directives() {
  return {
    resctrict: 'AE',
    template: template,
    replace: true,
    scope: {
      data: '='
    },
    link: function (scope, ele) {
      console.log(scope, ele);
    }
  };
}
${newDirName}Directives.$inject = [];
export default ${newDirName}Directives;`;
}


export function filterTmpl(newDirName) {
  return `function ${newDirName}Filter() {
  return function() {
    return {};
  };
}

${newDirName}Filter.$inject = [];

export default ${newDirName}Filter;`;
}


export function moduleTmpl(newDirName) {
  return `class ${newDirName}Module {
  constructor() {
    return this.init();
  }
  init() {
    
  }
}

${newDirName}Module.$inject = [];

export default ${newDirName}Module;`;
}

export function servicesTmpl(newDirName) {
  return `class ${newDirName}Service {
  constructor() {
    return this.init();
  }
  init() {
    
  }
}
${newDirName}Service.$inject = [];
export default ${newDirName}Service;`;
}