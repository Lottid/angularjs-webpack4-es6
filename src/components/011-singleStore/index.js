import './app.less';
import angular from 'angular';
import singleStoreController from './controller.js';

export default angular
  .module('myApp.singleStore', [])
  .controller('singleStoreController', singleStoreController)
  .name;
