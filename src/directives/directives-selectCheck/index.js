import './index.less';
import template from './index.html';
/*
下拉框模块
eg：
comment: textarea comment
title: directive title
palceholders : textarea placeholders

* <comment title="" placeholders="></comment>
* */

function selectCheck() {
  return {
    template: template,
    replace: true,
    transclude: true,

    scope: {
      data: '='
    },
    link: function($scope) {
      var arr = [];
      var arrShow = [];
      $scope
        .data
        .forEach(function(val, i) { //渲染checkbox
          var obj = {};
          if (val.check === 0) {
            val.css = 'img_2';
          } else {
            val.css = 'img_1';
            obj.index = i;
            obj.name = val.name;
            arr.push(obj);
            arrShow.push(val.name);
          }
        });
      $scope.comment = arrShow.join(',');
      $scope.checkbox = function(index) {
        if ($scope.data[index].check === 0) {
          $scope.data[index].check = 1;
          $scope.data[index].css = 'img_1';

        } else {
          $scope.data[index].check = 0;
          $scope.data[index].css = 'img_2';
        }
        var arr = [];
        var arrShow = [];
        $scope
          .data
          .forEach(function(val, i) { //渲染checkbox
            var obj = {};
            if (val.check === 0) {
              val.css = 'img_2';
            } else {
              val.css = 'img_1';
              obj.index = i;
              obj.name = val.name;
              arr.push(obj);
              arrShow.push(val.name);
            }
          });
        $scope.comment = arrShow.join(',');
      };
      $scope.showCheck = false;
      $scope.check = function() {
        if ($scope.showCheck) {
          $scope.showCheck = false;
        } else {
          $scope.showCheck = true;
        }
      };
    }
  };
}
export default selectCheck;
// export default angular
//   .module('selectCheck', [])
//   .directive('selectCheck', selectCheck)
//   .name;