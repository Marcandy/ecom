angular.module('ecom', ['ui.router'])
  .config( function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('jumbo', {
      url: '/',
      controller: 'jumboCtrl',
      templateUrl: './views/jumbo/jumbo.html'
    })
    .state('home', {
      url: '/home',
      controller: 'homeCtrl',
      templateUrl: './views/home/home.html'
    })
  })
