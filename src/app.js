// require('./base/reset.css'); require('./base/layout.less');

import '_assets/reset.css';
import '_assets/layout.less';
import angular from 'angular';
import './utils/index';
import './config/plumber.conf';
import uirouter from 'angular-ui-router'; 
import 'oclazyLoad'; //angular异步加载依赖

import routing from './app.config';
import directives from '_directives';
import modules from './module/index';
import filters from './filter/index';
import services from './services/index';
import { crumbsObj } from './base/001-crumbsObj';


// const app = angular.module('myApp', ['ui.router', 'oc.lazyLoad'].concat(modules).concat(directives));
// const app = angular.module('myApp', ['vapour'].concat(modules).concat(directives));
// const app = angular.module('myApp', ['vapour']);
const app = angular.module('myApp', [uirouter, 'oc.lazyLoad']);

// 注册 filters
filters(app);
// 注册 services
services(app);
// 注册 modules
modules(app);
// 注册 directive
directives(app);

app.run(($rootScope, $location, $timeout, $log, $T, $MD5,$bwSystem) => {
  console.log($MD5('message digest'), '$MD5');
  // console.log($rootScope, $location, $timeout, $log,$T)
  urlChange();
  $bwSystem.isLogin().then((result) => {
    console.log(result);
    //初始化
    $bwSystem.code_load_header();
  });
  $rootScope.$on('$stateChangeStart', (e, toState) => {
    $log.info('[$stateChangeStart]-[tostate]', toState);
    //导航路径数组
    let currentAry = toState.name.split('_');
    //做默认选择路径
    urlChange(toState.url);
    $rootScope.crumbsData = getCrumbsAry(currentAry);
    $log.info($rootScope.crumbsData, '$rootScope.crumbsData');
    document.title = $T.T($rootScope.crumbsData[$rootScope.crumbsData.length - 1]);
    //todo:每次切换页面，清空所有的body时间， 各个页面事件有冲突，统一成指令，可去掉
    angular
      .element(document.body)
      .unbind('click');
  });
  //视图切换成功
  $rootScope.$on('$viewContentLoaded', (e, toState) => {
    $log.info('[$viewContentLoaded]-[tostate]', toState);
  });
  /**
   * 路径存储
   * @loactionUrl 'summary/index'
   * @rootUrl 'summary'
   * @subUrl 'index'
   * */
  function urlChange(url) {
    let _url = url || $location.$$url;
    let _urlAry = _url.split(/[/?]/);
    $rootScope.locationUrl = _url;
    $rootScope.rootUrl = _urlAry[1];
    $rootScope.subUrl = _urlAry[1];
  }

  //获取导航路径数组
  function getCrumbsAry(ary) {
    let data = [];
    let parent = crumbsObj[ary[0]] || {};
    parent.name && data.push(parent.name);
    if (typeof parent.children === 'object') {
      data.push(parent.children[ary[1]]);
    }
    return data;
  }
});
app.config(routing);
// import './config/buried.point.conf';