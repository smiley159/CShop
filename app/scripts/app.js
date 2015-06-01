'use strict';

/**
 * @ngdoc overview
 * @name pshopApp
 * @description
 * # pshopApp
 *
 * Main module of the application.
 */
 angular
 .module('pshopApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ngFileUpload'
  ])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/manageStock', {
    templateUrl: 'views/managestock.html',
    controller: 'ManagestockCtrl',
    resolve:{
       productsss: function(product){
        return product.products() //returns a promise
    }
    }
  })
  .when('/orderList', {
    templateUrl: 'views/orderlist.html',
    controller: 'OrderlistCtrl'
  })
  .when('/transaction', {
    templateUrl: 'views/transaction.html',
    controller: 'TransactionCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
