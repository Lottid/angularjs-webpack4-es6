import './index.less';
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

function greetingDirectives() {
  return {
    resctrict: 'AE',
    template: template,
    replace: true,
    scope: {
      name: '='
    },
    link: function () {
      console.log('greetingDirectives');
    }
  };
}
greetingDirectives.$inject = [];
export default greetingDirectives;