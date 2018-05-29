import './index.less';
import template from './index.html';

crumbs.$inject = ['$rootScope', '$T'];
function crumbs($rootScope, $T) {
  return {
    restrict: 'A',
    template: template,
    replace: true,
    scope: {
      data: '=',
      seccurmbs: '=',
      home: '='
    },
    link: function ($scope) {
      $scope.NODE_EMBED = $scope.NODE_EMBED || $rootScope.NODE_EMBED;
      document.title = $T.T($rootScope.crumbsData[$rootScope.crumbsData.length - 1]);
      $scope.crumbsData = $scope.data || $rootScope.crumbsData;
    }
  };
}
export default crumbs;
// export default angular
//   .module('crumbs', [])
//   .directive('crumbs', crumbs)
//   .name;