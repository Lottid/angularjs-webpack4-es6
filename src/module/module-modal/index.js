import angular from 'angular';

class modal {
  constructor($animate, $compile, $rootScope, $controller, $q, $http, $templateCache) {
    this.$animate = $animate;
    this.$compile = $compile;
    this.$rootScope = $rootScope;
    this.$controller = $controller;
    this.$q = $q;
    this.$http = $http;
    this.$templateCache = $templateCache;
  }
  modalFactory(config) {
    if (!(!config.template ^ !config.templateUrl)) {
      throw new Error('Expected modal to have exacly one of either `template` or `templateUrl`');
    }

    let template = config.template,
      // controller = config.controller || null,
      // controllerAs = config.controllerAs,
      container = angular.element(config.container || document.body),
      element = null,
      html,
      scope = config.scope;
    console.log(this,'modalFactory');
    if (template) {
      html = this.$q.when(config.template);
    } else {
      html = this.$http.get(config.templateUrl, {
        cache: this.$templateCache
      }).then(function(response) {
        return response.data;
      });
    }

    function activate(locals) {
      return html.then(function(html) {
        if (!element) {
          attach(html, locals);
        }
      });
    }


    let attach = (html, locals) =>{
      element = angular.element(html);
      if (element.length === 0) {
        throw new Error('The template contains no elements; you need to wrap text nodes');
      }
      scope = scope || this.$rootScope.$new();
      if (locals) {
        for (var prop in locals) {
          scope[prop] = locals[prop];
        }
      }
      this.$compile(element)(scope);
      return this.$animate.enter(element, container);
    };

    let deactivate = () =>{
      if (!element) {
        return this.$q.when();
      }
      return this.$animate.leave(element).then(function() {
        scope.$destroy();
        scope = null;
        element.remove();
        element = null;
      });
    };

    let active = () => {
      return !!element;
    };

    return {
      activate: activate,
      deactivate: deactivate,
      active: active
    };
  }
}
modal.$inject = ['$animate', '$compile', '$rootScope', '$controller', '$q', '$http', '$templateCache'];

export default modal;
// export default angular
//   .module('vapour.modal', [])
//   .service('vapour.modal', modal)
//   .name;
