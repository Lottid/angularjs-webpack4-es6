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
function dirTime() {
  return {
    template: template,
    replace: true,
    transclude: true,

    scope: {
      data: '=',
    },
    link: function($scope, element, attrs) {
      $scope.start = attrs.start;
      $scope.end = attrs.end;
    }
  };

}
export default dirTime;
// export default angular
//   .module('dirTime', [])
//   .directive('dirTime', dirTime)
//   .name;