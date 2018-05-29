import './index.less';
import template from './index.html';

function radios() {
  return {
    template: template,
    replace: true,
    scope: {
      data: '=',
      active: '@',
      inline: '@',
      change: '&'
    },
    link: function($scope) {
      $scope.active = $scope.active || '1';
      // console.log($scope.active,'gg');
      $scope.inline = $scope.inline
        ? $scope.inline
        : '2';
      $scope.radioClick = function(key) {
        if ($scope.active !== key) {
          $scope.active = key;
          $scope.change({
            key: key
          });
        }
      };
    }
  };

}
export default radios;
// export default angular
//   .module('radios', [])
//   .directive('radios', radios)
//   .name;