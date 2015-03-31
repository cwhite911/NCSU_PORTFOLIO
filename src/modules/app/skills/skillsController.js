'use strict';

module.exports = /*@ngInject*/
  function skillsController($scope) {

    //Skills list
    $scope.skills = [
      {
        name:'Desktop GIS',
        description: 'Throughout both my educational and professional career I have mostly used Esri products in the GIS desktop setting. However, I have also used both GRASS, QGIS and other open source desktop tools on various projects ',
        images: [
          {
            text: 'Least Cost Path Analysis',
            image: '../assets/images/gisdesk1.png'
          }
        ]
      },
      {
        name: 'Surveying',
        description: ''
      },
      {
        name: 'Frontend Web Development',
        description: ''
      },
      {
        name: 'Backend Web Development',
        description: ''
      },
      {
        name: 'Database Administration',
        description: '',
      },
      {
        name: 'DevOps',
        description: ''
      }];

    //Init skill value
    $scope.skill = $scope.skills[0];

    $scope.setSkill = function (type){
      $scope.skill = type;
    };

    $scope.isActive = function (type){
      return $scope.skill.name === type;
    };
};
