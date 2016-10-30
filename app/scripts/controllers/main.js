'use strict';

/**
 * @ngdoc function
 * @name dockerhubSearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dockerhubSearchApp
 */
angular.module('dockerhubSearchApp')
  .controller('MainCtrl', function ($scope) {
    $scope.submit = function() {
    	console.log($scope.urlName);
    };
  });
