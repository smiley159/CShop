'use strict';

/**
 * @ngdoc function
 * @name pshopApp.controller:TransactionCtrl
 * @description
 * # TransactionCtrl
 * Controller of the pshopApp
 */
angular.module('pshopApp')
  .controller('TransactionCtrl', function ($scope,authentication) {
    $scope.transactions = authentication.transactions;
  });
