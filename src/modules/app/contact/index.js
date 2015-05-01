'use strict';

module.exports =
  angular.module('NCSU_PORTFOLIO.contact', [
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/layout.html',

    });
  });
