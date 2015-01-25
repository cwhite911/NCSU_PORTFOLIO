'use strict';

module.exports =
  angular.module('NCSU_PORTFOLIO.foo', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('foo', {
      url: '',
      templateUrl: 'app/main/layout.html',
      controller: 'mainController'
    });
  })
  .controller('mainController', require('./mainController'));
