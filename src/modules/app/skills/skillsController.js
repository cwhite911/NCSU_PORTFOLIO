'use strict';

module.exports = /*@ngInject*/
  function skillsController($scope) {

    //Skills list
    $scope.skills = ['GIS', 'Surveying', 'Frontend Web Development', 'Backend Web Development', 'Databases', 'DevOps'];
    //Init skill value
    $scope.skill = 'GIS';

    $scope.setSkill = function (type){
      $scope.skill = type;
    };

    $scope.isActive = function (type){
      console.log(type);
      return $scope.skill === type;
    };
};
