import './app.less';
import angular from 'angular';
import SetFrameController from './controller.js';

export default angular.module('myApp.setFrame', [])
  .controller('SetFrameController', SetFrameController)
  .name;
