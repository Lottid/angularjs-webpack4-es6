import './app.less';
import angular from 'angular';
import SetWeightController from './controller.js';

export default angular.module('myApp.setWeight', [])
  .controller('SetWeightController', SetWeightController)
  .name;
