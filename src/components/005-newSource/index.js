import './app.less';
import angular from 'angular';
import NewSourceController from './controller.js';

export default angular.module('myApp.newSource', [])
  .controller('NewSourceController', NewSourceController)
  .name;
