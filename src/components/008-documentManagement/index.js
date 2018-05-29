import './app.less';
import angular from 'angular';
import DocumentManagementController from './controller.js';

// DocumentManagementController.$inject = ['$watch'];
export default angular
  .module('myApp.documentManagement', [])
  .controller('DocumentManagementController', DocumentManagementController)
  .name;
