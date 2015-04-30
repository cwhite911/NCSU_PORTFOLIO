'use strict';

module.exports = /*@ngInject*/
  function skillsController($scope) {

    //Skills list
    $scope.skills = [{
        name:'Desktop GIS',
        description: 'Throughout both my educational and professional career I have mostly used Esri products in the GIS desktop setting, but also use GRASS, QGIS and other open source desktop tools on various projects at NCSU and at work. My first job in GIS involved digitizing all of the sidewalks in Asheville, NC and that quickly led to creating other large datasets from scratch for the city. By creating these datasets and form classes at NC State I have developed a strong understanding of how to produce quality data for large projects. These roles led me to a position where I know design programs to automate and increase efficancy for these types of processes. ',
        images: [
          {
            text: 'Least Cost Path Analysis',
            image: '/assets/images/gisdesk1.png'
          }
        ]
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
        description: 'I have built APIs for both work and school. Node.js is my backend development language of choice because I enjony working in an end to end JavaScript environment that is fast and easy to deploy. However, I have experince in developing python backend scripts as well including writing geoprocessing tools to extend ArcGIS Server.'
      },
      {
        name: 'Database Administration',
        description: 'At the City of Raleigh I administrate all Public Utilities feature classes, feature datasets and tables within ArcSDE using a direct connection to an Orcale backend, but prefer to work with either Postgresql or MongoDB. Both are very powerful tools which have unique use cases, in Plott I use MongoDB because of its ease of use with while developing web applications.',
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
