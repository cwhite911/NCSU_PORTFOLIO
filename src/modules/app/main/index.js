'use strict';

module.exports =
  angular.module('NCSU_PORTFOLIO.main', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('main', {
      url: 'main',
      templateUrl: 'app/main/layout.html',
      controller: 'mainController'
    });
  })
  .controller('mainController', require('./mainController'));
