import './app.less';
import angular from 'angular';
import homeController from './controller.js';

export default angular.module('myApp.home', [])
  .controller('homeController', homeController)
  .name;