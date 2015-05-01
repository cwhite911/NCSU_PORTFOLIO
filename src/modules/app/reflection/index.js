'use strict';

module.exports =
  angular.module('NCSU_PORTFOLIO.reflection', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('reflection', {
      url: '/reflection',
      templateUrl: 'app/reflection/layout.html',
      controller: 'reflectionController'
    });
  })
  .controller('reflectionController', require('./reflectionController'));
