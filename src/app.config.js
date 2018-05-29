import standList from './components/001-standList/router';
import standRange from './components/002-setStandrange/router';
import setFrame from './components/003-setFrame/router';
import setWeight from './components/004-setWeight/router';
import newSource from './components/005-newSource/router';
import newFrame from './components/006-newFrame/router';
import addQue from './components/007-addQue/router';
import documentManagement from './components/008-documentManagement/router';
import IntegratedDataAnalysis from './components/009-IntegratedDataAnalysis/router';
import operatingRecord from './components/010-operatingRecord/router';
import singleStore from './components/011-singleStore/router';
import singleStoreDataAnalysis from './components/012-singleStoreDataAnalysis/router';
import subordinateDataAnalysis from './components/013-subordinateDataAnalysis/router';

routing.$inject = ['$urlRouterProvider', '$locationProvider','$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider,$stateProvider) {
  // $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('standList');
  $stateProvider.state('standList',standList);
  $stateProvider.state('standRange',standRange);
  $stateProvider.state('setFrame',setFrame);
  $stateProvider.state('setWeight',setWeight);
  $stateProvider.state('newSource',newSource);
  $stateProvider.state('newFrame',newFrame);
  $stateProvider.state('addQue',addQue);
  $stateProvider.state('documentManagement',documentManagement);
  $stateProvider.state('IntegratedDataAnalysis',IntegratedDataAnalysis);
  $stateProvider.state('operatingRecord',operatingRecord);
  $stateProvider.state('singleStore',singleStore);
  $stateProvider.state('singleStoreDataAnalysis',singleStoreDataAnalysis);
  $stateProvider.state('subordinateDataAnalysis',subordinateDataAnalysis);
}