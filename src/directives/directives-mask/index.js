import './index.less';
import template from './index.html';


/*
遮罩层
* des       描述文字
* height    文字总高度
* allscreen 是否全部遮罩  1为全部 否则为部分遮罩
*
* eg:
* <mask-box des="描述文字" height="20" allscreen="1">
    <img class="imgSrc" src="./img/2_1.jpg" alt=""  ng-mouseleave="showTask=false"  ng-mouseover="showTask=true">
  </mask-box>
* */

function maskBox() {
  return {
    restrict: 'AE',
    template: template,
    replace: true,
    transclude: true,
    scope: {
      des: '@',
      height: '@',
      allscreen: '@'
    },
    link: function($scope) {
      $scope.masktop = $scope.allscreen === '1' ? '0px' : '70%';
      let H = $scope.height;
      $scope.mt = (-parseInt(H) / 2 + 'px');
    }
  };
}
export default maskBox;
// export default angular
//   .module('maskBox', [])
//   .directive('maskBox', maskBox)
//   .name;