import './app.less';
import angular from 'angular';
import IntegratedDataAnalysisController from './controller.js';

export default angular
  .module('myApp.integratedDataAnalysis', [])
  .controller('IntegratedDataAnalysisController', IntegratedDataAnalysisController)
  .name;
