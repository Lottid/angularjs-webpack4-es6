import './app.less';
import angular from 'angular';
import SetStandrangeController from './controller.js';

export default angular.module('myApp.standRange', [])
  .controller('SetStandrangeController', SetStandrangeController)
  .name;
