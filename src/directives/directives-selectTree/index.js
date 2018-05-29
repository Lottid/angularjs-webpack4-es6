import './index.less';
import template from './index.html';
/*
评论模块
eg：
comment: textarea comment
title: directive title
palceholders : textarea placeholders

* <comment title="" placeholders="></comment>
* */
function selectTree() {
  return {
    template: template,
    replace: true,
    transclude: true,

    scope: {
      data: '='
    },
    link: function ($scope) {
      $scope.comment = '客房部';
      $scope.showCheck = false;
      $scope.check = function () {
        if ($scope.showCheck) {
          $scope.showCheck = false;
        } else {
          $scope.showCheck = true;
        }
      };
    }
  };

}
export default selectTree;
// export default angular
//   .module('selectTree', [])
//   .directive('selectTree', selectTree)
//   .name;