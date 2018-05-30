import '_assets/reset.css';
import angular from 'angular';
import './utils/index';
import uirouter from 'angular-ui-router'; 
import 'oclazyLoad'; //angular异步加载依赖

import routing from './app.config';
import directives from '_directives';
import modules from './module/index';
import filters from './filter/index';
import services from './services/index';


const app = angular.module('myApp', [uirouter, 'oc.lazyLoad']);

// 注册 filters
filters(app);
// 注册 services
services(app);
// // 注册 modules
modules(app);
// 注册 directive
directives(app);

app.run(($log, $MD5) => {
  $log.log($MD5('message digest'), '$MD5');
});
app.config(routing);