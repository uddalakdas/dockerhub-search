'use strict';

/**
 * @ngdoc overview
 * @name dockerhubSearchApp
 * @description
 * # dockerhubSearchApp
 *
 * Main module of the application.
 */
angular
  .module('dockerhubSearchApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/repositories', {
        templateUrl: 'views/repositories.html',
        controller: 'RepositoriesCtrl',
        controllerAs: 'repositories'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
