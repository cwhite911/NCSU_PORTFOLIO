'use strict';

module.exports =
  angular.module('NCSU_PORTFOLIO.project', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('project', {
      url: '/project',
      templateUrl: 'app/project/layout.html',
      controller: 'projectController'
    });
  })
  .controller('projectController', require('./projectController'));
