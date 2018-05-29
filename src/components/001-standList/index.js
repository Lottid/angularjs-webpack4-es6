import './app.less';
import angular from 'angular';
import StandListController from './controller.js';

export default angular.module('myApp.standList', [])
  .controller('StandListController', StandListController)
  .name;
