'use strict';

module.exports =
  angular.module('NCSU_PORTFOLIO.about', [
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'app/about/layout.html',
      controller: 'aboutController'
    });
  })
  .controller('aboutController', require('./aboutController'));
