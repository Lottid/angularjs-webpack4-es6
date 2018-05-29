import './app.less';
import angular from 'angular';
import AddQueController from './controller.js';

export default angular.module('myApp.addQue', [])
  .controller('AddQueController', AddQueController)
  .name;
