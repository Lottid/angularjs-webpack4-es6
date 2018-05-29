import './index.less';
import template from './index.html';

/*
模块头部栏
eg:
* $scope.data={
        title:'头部标题文字',
        smallTip:'小字描述',
        hrefs:[
            {
                href:'链接地址',
                text:'链接文字'
            }
        ]
    };
* */

function title() {
  return {
    resctrict: 'AE',
    template: template,
    replace: true,
    scope: {
      data: '='
    },
    link: function (scope, ele) {
      scope.number = ele.attr('cid');
      scope.version = ele.attr('version');
      scope.block = ele.attr('block');
      scope.page = ele.attr('page');
    }
  };
}
// class titles {
//   constructor() {
//     return this.init;
//   }
//   init() {
//     return {
//       resctrict: 'AE',
//       template: template,
//       replace: true,
//       scope: {
//         data: '='
//       },
//       link: function (scope, ele) {
//         scope.number = ele.attr('cid');
//         scope.version = ele.attr('version');
//         scope.block = ele.attr('block');
//         scope.page = ele.attr('page');
//       }
//     };
//   }
// }
// console.log(new titles(),'titlestitles',title);
// const Title = new titles();

// export default Title;
export default title;