'use strict';

/**
 * @ngdoc function
 * @name pshopApp.controller:OrderlistCtrl
 * @description
 * # OrderlistCtrl
 * Controller of the pshopApp
 */
angular.module('pshopApp')
  .controller('OrderlistCtrl', function ($scope,authentication) {

  		$scope.orderLists = authentication.orderLists;
  		console.log($scope.orderLists);
  });
