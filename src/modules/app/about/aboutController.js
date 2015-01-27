'use strict';

module.exports = /*@ngInject*/
  function aboutController($scope) {

    //Skills list
    $scope.skills = ['GIS', 'Surveying', 'Frontend Web Development', 'Backend Web Development', 'Database Administration', 'DevOps'];
    //Init skill value
    $scope.skill = 'GIS';

    $scope.setSkill = function (type){
      $scope.skill = type;
    };

    $scope.isActive = function (type){
      return $scope.skill === type;
    };
};
