'use strict';

module.exports =
  angular.module('NCSU_PORTFOLIO.skills', [
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('skills', {
      url: '/skills',
      templateUrl: 'app/skills/layout.html',
      controller: 'skillsController'
    });
  })
  .controller('skillsController', require('./skillsController'));
