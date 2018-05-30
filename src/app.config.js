import homeRouter from './components/components-home/router';

routing.$inject = ['$urlRouterProvider', '$locationProvider','$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider,$stateProvider) {  
  $urlRouterProvider.otherwise('home');
  $stateProvider.state('home',homeRouter);
}