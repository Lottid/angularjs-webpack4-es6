import './app.less';
import angular from 'angular';
import NewFrameController from './controller.js';

export default angular.module('myApp.newFrame', [])
  .controller('NewFrameController', NewFrameController)
  .name;
