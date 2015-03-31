'use strict';

module.exports =
  angular.module('NCSU_PORTFOLIO.work', [
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('work', {
      url: '/work',
      templateUrl: 'app/work/layout.html',
      controller: 'workController'
    });
  })
  .controller('workController', require('./workController'));
