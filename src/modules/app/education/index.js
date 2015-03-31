'use strict';

module.exports =
  angular.module('NCSU_PORTFOLIO.education', [
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('education', {
      url: '/education',
      templateUrl: 'app/education/layout.html',
      controller: 'educationController'
    });
  })
  .controller('educationController', require('./educationController'));
