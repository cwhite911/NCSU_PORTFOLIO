'use strict';

module.exports = /*@ngInject*/
  function mainController($scope, $location) {
    $scope.viewControl = {
        main: true,
        skills: false,
        work: false,
        education: false
    };

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

  };
