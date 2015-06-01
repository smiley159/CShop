'use strict';

/**
 * @ngdoc directive
 * @name pshopApp.directive:manageDir
 * @description
 * # manageDir
 */
angular.module('pshopApp')
  .directive('manageDir', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the manageDir directive');
      }
    };
  });
