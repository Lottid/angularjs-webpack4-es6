import './app.less';
import angular from 'angular';
import SingleStoreDataAnalysisController from './controller.js';

export default angular
  .module('myApp.singleStoreDataAnalysis', [])
  .controller('SingleStoreDataAnalysisController', SingleStoreDataAnalysisController)
  .name;
