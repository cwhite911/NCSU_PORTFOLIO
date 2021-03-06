'use strict';

module.exports = /*@ngInject*/
  function skillsController($scope, $anchorScroll, $location) {

    //Skills list
    $scope.skills = [{
        name:'Desktop GIS',
      },
      {
        name: 'Frontend Web Development',
      },
      {
        name: 'Backend Web Development'
      },
      {
        name: 'Database Administration'
      }];

    //Init skill value
    $scope.skill = $scope.skills[0];

    $scope.setSkill = function (type){
      $scope.skill = type;
      if ($location.hash() !== type) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash(type);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };

    $scope.isActive = function (type){
      return $scope.skill.name === type;
    };
    angular.element(document).ready(function () {


    var sidewalkmap = L.map('sidewalkmap').setView([35.600251, -82.570848], 12);
    L.tileLayer('https://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
  }).addTo(sidewalkmap);
    var sidewalk = L.tileLayer.wms("http://opendataserver.ashevillenc.gov:80/geoserver/wms", {
      layers: 'coa_sidewalks',
      format: 'image/png',
      maxZoom: 25,
      transparent: true,
      zIndex: 3,
      attribution: '<a href="ashevillenc.gov" >City of Asheville</a>'

   }).addTo(sidewalkmap);


   var cemeterymap = L.map('cemeterymap').setView([35.600251, -82.570848], 17.5);

 //Adding WMS layers from geoserver
 L.tileLayer.wms("http://opendataserver.ashevillenc.gov:80/geoserver/wms", {
     layers: 'coa_cemetery_graves',
     format: 'image/png',
     maxZoom: 25,
     transparent: true,
     zIndex: 5

  }).addTo(cemeterymap);
L.tileLayer.wms("http://opendataserver.ashevillenc.gov:80/geoserver/wms", {
    layers: 'coa_cemetery_lots',
    format: 'image/png',
    maxZoom: 25,
    transparent: true,
    zIndex: 4

 }).addTo(cemeterymap);

L.tileLayer.wms("http://opendataserver.ashevillenc.gov:80/geoserver/wms", {
    layers: 'coa_cemetery_sections',
    format: 'image/png',
    maxZoom: 25,
    transparent: true,
    zIndex: 3,
    attribution: '<a href="ashevillenc.gov" >City of Asheville</a>'

 }).addTo(cemeterymap);

var balloon = L.tileLayer.wms("http://opendataserver.ashevillenc.gov:80/geoserver/wms", {
    layers: 'topp:RiversideCemeteryBallonImage',
    format: 'image/png',
    maxZoom: 25,
    transparent: false,
    zIndex: 1

 }).addTo(cemeterymap);



 });
};
