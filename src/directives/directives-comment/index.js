import './index.less';
import template from './index.html';
// import ajaxModule from '../../module/module-ajax/index'
// console.log(ajaxModule,'ajax')
/*
评论模块
eg：
comment: textarea comment
title: directive title
palceholders : textarea placeholders

* <comment title="" placeholders="></comment>$ajax,$HOST
* */
function comment($rootScope, $ajax,$HOST,$log) {
  return {
    template: template,
    replace: true,
    transclude: true,
    scope: {},
    link: function ($scope, element, attrs) {
      // console.log($rootScope,'$ajax$ajax$ajax')
      // console.log($ajax, '$ajax',$HOST)
      $scope.cTitle = attrs.ctitle;
      $scope.cPlaceholder = attrs.cplaceholder;
      var cookie = document
        .cookie
        .split(';');
      var cookieObj = {};
      cookie.forEach(function (val) {
        var name = val
          .split('=')[0]
          .split(' ')[1];
        var value = val.split('=')[1];
        cookieObj[name] = value;
      });
      var obj = {};
      var href = window
        .location
        .href
        .split('#')[1];
      // var id = cookieObj.uinf;
      var id = '6%7C101109%7C101109';
      var idArr = id.split('%7C');
      obj = {
        htl_cd: Number(idArr[1]),
        user_id: String(idArr[0]),
        block: attrs.block,
        version: attrs.version,
        pages: attrs.pages,
        comment: ''
      };
      var arr = [];
      for (var i in obj) {
        arr.push(i + '=' + obj[i]);
      }
      arr.pop();
      var str = arr.join('&');
      $ajax.ajax({
        url: '/api/v1/comment/?' + str,
        type: 'get',
        dataType: 'jsonp',
        jsonp: 'callback',
        api: $HOST.commentURL
      }).then((res) => {
        if (localStorage.getItem(href)) {
          $scope.comment = localStorage.getItem(href);
        } else if (!localStorage.getItem(href) && res.length !== 0) {
          $scope.comment = res.comment;
        }
      });
      if (localStorage.getItem(href)) {
        $scope.comment = localStorage.getItem(href);
      }
      $scope.submit = function () {
        console.log('submit');
        obj.comment = $scope.comment;
        var arr = [];
        for (var i in obj) {
          arr.push(i + '=' + obj[i]);
        }
        var str = arr.join('&');
        $ajax.ajax({
          url: '/api/v1/comment/insert?' + str,
          type: 'get',
          dataType: 'jsonp',
          jsonp: 'callback',
          api: $HOST.commentURL
        }).then((res) => {
          $log(res);
        });
      };
      $scope.changes = function () {
        console.log('changes');
        obj.comment = $scope.comment;
        localStorage.setItem(href, obj.comment);
      };
    }
  };
}

export default comment;
// export default angular
//   .module('comment', [])
//   .directive('comment', comment)
//   .name;