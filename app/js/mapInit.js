'use strict';

// create a new map, setting the view to Muenster
var map = L.map('map').setView([51.96, 7.61], 13);

// define layers
// OpenStreetMap basemap
var osmLayer = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

// OpenCycleMap basemap
var ocmLayer = new L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="http://www.thunderforest.com/">Andy Allan</a>'
});


// Initialise the FeatureGroup to store database layers
var dbFeatures = new L.FeatureGroup();
map.addLayer(dbFeatures);


// layer group for basemaps
var baseMaps = {
     "OpenStreetMap": osmLayer,
     "OpenCycleMap": ocmLayer
}

// layer control switch
var layerControl = new L.control.layers(baseMaps).addTo(map);

// sets the OSM layer as default
osmLayer.addTo(map);

// add a marker at the position of the GEO building.
// marker popup contains the image img/ifgi.jpg

// custom icon for the marker
var greenMarkerIcon = L.icon({
    iconUrl:   'lib/css/images/marker-icon-green.png',
    shadowUrl: 'lib/css/images/marker-shadow.png',
	iconSize:    [25, 41],
	iconAnchor:  [12, 41],
	popupAnchor: [1, -34],
	shadowSize:  [41, 41]
});