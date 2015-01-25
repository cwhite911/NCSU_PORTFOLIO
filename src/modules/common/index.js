'use strict';

module.exports =
  angular.module('NCSU_PORTFOLIO.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
