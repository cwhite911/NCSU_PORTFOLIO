'use strict';

module.exports = /*@ngInject*/
  function skillsController($scope) {

    //Skills list
    $scope.skills = [
      {
        name:'Desktop GIS',
        description: 'Throughout both my educational and professional career I have mostly used Esri products in the GIS desktop setting. However, I have also used both GRASS, QGIS and other open source desktop tools on various projects at NCSU. One project that heavily utilized GRASS was  ',
        images: [
          {
            text: 'Least Cost Path Analysis',
            image: '/assets/images/gisdesk1.png'
          }
        ]
      },
      {
        name: 'Surveying',
        description: ''
      },
      {
        name: 'Frontend Web Development',
        description: 'As a web developer I have many project that bring together traditional GIS and the web. I use resourse both open and closed sourced, but I prefer to use open-source tools where applicable. Currently my go to JavaScript stack is Angularjs and my prefered mapping library leafletjs. During my time at NCSU I developed many applications that bring GIS design and development to the web. However Plott, my masters project, is an indoor position system I developed to provide an open-source option for developers and is my best technical work I have done even though it is not 100% complete.',
        images: [
          {
            text: 'Plott Coverage Map',
            image: '/assets/images/demo.PNG'
          },
          {
            text: 'Hydrant Inspections Dashboard - \nDesigned to provide real-time statistics to fire station cheif about hydrants inspection efforts.',
            image: '/assets/images/hydrantAppMap.PNG'
          }
        ]
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
