import './app.less';
import angular from 'angular';
import SubordinateDataAnalysisController from './controller.js';

export default angular
  .module('myApp.subordinateDataAnalysis', [])
  .controller('SubordinateDataAnalysisController', SubordinateDataAnalysisController)
  .name;
