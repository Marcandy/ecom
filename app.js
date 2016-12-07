angular.module('ecom', ['ui.router'])
  .config( function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/jumbo');

    $stateProvider
    .state('home', {
      url: '/',
      controller: 'mainCtrl'
      // templateUrl: './views/'
    })
    .state('jumbo', {
      url: '/jumbo',
      controller: 'jumboCtrl',
      templateUrl: './views/jumbo/jumbo.html'
    })
  })
