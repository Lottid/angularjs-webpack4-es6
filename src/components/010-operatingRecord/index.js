import './app.less';
import angular from 'angular';
import OperatingRecordController from './controller.js';

export default angular
  .module('myApp.operatingRecord', [])
  .controller('OperatingRecordController', OperatingRecordController)
  .name;
