'use strict';

/**
 * @ngdoc function
 * @name pshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pshopApp
 */
angular.module('pshopApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
