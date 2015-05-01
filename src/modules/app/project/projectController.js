'use strict';

module.exports = /*@ngInject*/
  function projectController($scope) {

    angular.element(document).ready(function () {


    var plottmap = L.map('plottmap').setView([36.022018, -78.902483], 21);
    L.tileLayer('https://{s}.tiles.mapbox.com/v3/ctwhite.l4hma6jb/{z}/{x}/{y}.png', {
      attribution: 'Plott',
      maxZoom: 22
  }).addTo(plottmap);

 });

  };
