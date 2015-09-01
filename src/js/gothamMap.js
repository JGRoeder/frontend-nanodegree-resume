//'use strict';
var poi = require('./poi.js');
var bio = require('./bio.js');
var education = require('./education.js');
var work = require('./work.js');
var places = require('./places.js');
var regions = require('./regions.js');
var MarkerWithLabel = require('./vendor/markerwithlabel.min.js');
var LabelOverlay = require('./vendor/label.js');
var InfoBox = require('./vendor/infobox.js');


(function(){
var infowindow = null;


//----------------------//
// Setup New Projection
//----------------------//

// Note: this value is exact as the map projects a full 360 degrees of longitude
var GALL_PETERS_RANGE_X = 800;

// Note: this value is inexact as the map is cut off at ~ +/- 83 degrees.
// However, the polar regions produce very little increase in Y range, so
// we will use the tile size.
var GALL_PETERS_RANGE_Y = 510;

function degreesToRadians(deg) {
  return deg * (Math.PI / 180);
}

function radiansToDegrees(rad) {
  return rad / (Math.PI / 180);
}

/**
 * @constructor
 * @implements {google.maps.Projection}
 */
function GallPetersProjection() {

  // Using the base map tile, denote the lat/lon of the equatorial origin.
  this.worldOrigin_ = new google.maps.Point(GALL_PETERS_RANGE_X * 400 / 800,
      GALL_PETERS_RANGE_Y / 2);

  // This projection has equidistant meridians, so each longitude degree is a linear
  // mapping.
  this.worldCoordinatePerLonDegree_ = GALL_PETERS_RANGE_X / 360;

  // This constant merely reflects that latitudes vary from +90 to -90 degrees.
  this.worldCoordinateLatRange = GALL_PETERS_RANGE_Y / 2;
}

GallPetersProjection.prototype.fromLatLngToPoint = function(latLng) {

  var origin = this.worldOrigin_;
  var x = origin.x + this.worldCoordinatePerLonDegree_ * latLng.lng();

  // Note that latitude is measured from the world coordinate origin
  // at the top left of the map.
  var latRadians = degreesToRadians(latLng.lat());
  var y = origin.y - this.worldCoordinateLatRange * Math.sin(latRadians);

  return new google.maps.Point(x, y);
};

GallPetersProjection.prototype.fromPointToLatLng = function(point, noWrap) {

  var y = point.y;
  var x = point.x;

  if (y < 0) {
    y = 0;
  }
  if (y >= GALL_PETERS_RANGE_Y) {
    y = GALL_PETERS_RANGE_Y;
  }

  var origin = this.worldOrigin_;
  var lng = (x - origin.x) / this.worldCoordinatePerLonDegree_;
  var latRadians = Math.asin((origin.y - y) / this.worldCoordinateLatRange);
  var lat = radiansToDegrees(latRadians);
  return new google.maps.LatLng(lat, lng, noWrap);
};

//--------------------------------------------------------------------------//
// Search Locations
//--------------------------------------------------------------------------//
// locationFinder() returns an array of every location string from the JSONs
// written for bio, education, and work.
//--------------------------------------------------------------------------//

  function locationFinder() {

    var locations = [];
    locations.push(bio.data.contacts.location);

    for (var school in education.data.schools) {
      locations.push(education.data.schools[school].location);
    }

    for (var job in work.data.jobs) {
      locations.push(work.data.jobs[job].location);
    }
    return locations;
  }

//-----------------------------//
// Map Labels & Points
//-----------------------------//

// Take a list of objects in
//  internal-name: {
//    "name": "Formatted Name",
//    "coord_B"
//  }
function doPoi(locationsObject) {
  var iconBase = './img/map_items/';
  var icon = {
    poi: {
      icon: iconBase + 'poi.png'
    }
  };
  for ( var point in locationsObject ) {
    new MarkerWithLabel({
      //position: pois[place].coord,
      position: new google.maps.LatLng(locationsObject[point].coord_B, locationsObject[point].coord_k),
      icon: icon.poi.icon,
      labelContent: locationsObject[point].name,
      labelClass: 'poi-label',
      labelAnchor: new google.maps.Point(-7, 14),
      map: gallPetersMap,
      optimized: true,
      labelStyle: {opacity: 0.6},
      title: locationsObject[point].name,
    });
  }
}

function doRegions(regionsObject) {
  for ( var region in regionsObject ){
    new LabelOverlay({
      ll : new google.maps.LatLng(regionsObject[region].coord_B, regionsObject[region].coord_k),
      label : regionsObject[region].name,
      map : gallPetersMap,
      optimized: true,
      className: regionsObject[region].rel,
      zIndex: 2
    });
  }
}


function doPlaceMarker(placething){

  var markerImage = {
        url: './img/map_items/mark-p.png',
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(25, 75)
    };
  var markerImageHover = {
        url: './img/map_items/mark-p-h.png',
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(25, 75)
    };

  var placeMarker = new google.maps.Marker({
      map: gallPetersMap,
      icon: markerImage,
      optimized: false,
      position: new google.maps.LatLng(placething.B,placething.k),
      title: placething.name,
      zIndex: google.maps.Marker.MAX_ZINDEX + 1
    });

  google.maps.event.addListener(placeMarker, 'mouseover', function() {
    placeMarker.setIcon(markerImageHover);
  });

  google.maps.event.addListener(placeMarker, 'mouseout', function() {
    placeMarker.setIcon(markerImage);
  });

  // brute force the z-index
  placeMarker.setZIndex(google.maps.Marker.MAX_ZINDEX + 555);

  // create and bind our info window

  var windowSettings = {
    content: '<div class=\'info-window\'><h4 class=\'place-head\'>' + placething.name + '</h4><div class=\'image-frame\'><img src="' + placething.image +  '"width=\'160\' height=\'124\'></div><div class=\'details-frame\'><p class=\'details\'>' + placething.desc + '</p></div></div>',
    alignBottom: true,
    closeBoxURL: './img/map_items/close.png',
    pixelOffset: new google.maps.Size(-215,-32)
  };

  google.maps.event.addListener(placeMarker, 'click', function(){
    if (infowindow) {
      infowindow.close();
    }
    infowindow = new InfoBox(windowSettings);
    infowindow.open(gallPetersMap,placeMarker);
    gallPetersMap.panTo(infowindow.getPosition());
  });

}

// @argument {string} placeName a place name e.g. "West Bloomfield, Michigan"
// returns an array in ['westbloomfield', 'michigan'] format

function placeFormat (placeName) {
  var place = placeName.split(',');
  var placeLength = place.length;
  for ( var i = 0; i < placeLength; i++ ) {
    place[i] = squishName(place[i]);
  }
  return place;
}

function squishName (name) {
  name = name.toLowerCase().replace(/\s+/g, '');
  return name;
}

// @argument {array} formattedPlaceArray e.g. ['westbloomfield', 'michigan']
// @argument {object} locationDirectory a json like object containing location data
//
// returns a matched array in the format ['localeName', 'regionName']
function searchRegion (formattedPlaceArray, locationDirectory) {
  for ( var region in locationDirectory ) {
    if ( formattedPlaceArray[1] === locationDirectory[region].identifier ) {
     var output = {
      'locale': formattedPlaceArray[0],
      'regionObject': locationDirectory[region].data,
      'regionIdentifier': locationDirectory[region].identifier
    };
    return output;
    }
  }
}

function getNamesArray ( placeObject ) {
  return placeObject.regionObject;
}

function searchLocale (placeRegionArray) {
  for ( var place in placeRegionArray.regionObject ) {
    var namesArray = placeRegionArray.regionObject[place].names;
    for( var names=0, len = namesArray.length; names < len; names++ ) {
      if ( placeRegionArray.locale == squishName(namesArray[names]) ) {
        var output =  placeRegionArray.regionObject[place];
        return output;
      }
    }
  }
}

// for each location
// split at ,
// convert each half to lowercase and remove spaces
// compares second half to locationDirectory region -> identifier until a match is found
// when match is found take associate locale part and compare it to each region -> data -> locale -> names array
// when match is found return data from region -> data -> locale
function getPlaces (places, locationDirectory ) {
  var objects = [];
  for( var place=0, len1 = places.length; place < len1; place++ ) {
    objects.push(placeFormat(places[place]));
  }

  for( var i=0, len2 = objects.length; i < len2; i++) {
    var data = searchRegion(objects[i], locationDirectory);
    data = searchLocale(data);

    var output = {
      'name': data.formatted_name,
      'B': data.coord_B,
      'k': data.coord_k,
      'image': data.image,
      'desc': data.desc
    };
    doPlaceMarker(output);
  }

}



//----------------------//
// Initialize Map
//----------------------//

function initialize() {
  //var gallPetersMap;

  var gallPetersMapType = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
      var numTiles = 1 << zoom;

      // Don"t wrap tiles vertically.
      if (coord.y < 0 || coord.y >= numTiles ) {
        return null;
      }

      // Moves the tiles by 1 full width ( because I messed up mapping my locations lol )
      var x = (coord.x - numTiles);

      if ( x < 0 || x >= numTiles ) {
        return null;
      }

      // For simplicity, we use a tileset consisting of 1 tile at zoom level 0
      // and 4 tiles at zoom level 1. Note that we set the base URL to a
      // relative directory.
      var baseURL = './img/maptiles/';
      baseURL += 'tile_' + zoom + '_' + x + '-' + coord.y + '.png';
      return baseURL;
    },
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    minZoom: 2,
    maxZoom: 2,
    name: 'Gall-Peters'
  });

  gallPetersMapType.projection = new GallPetersProjection();

  var mapOptions = {
    zoom: 0,
    center: new google.maps.LatLng(27,-10),
    backgroundColor: '#291A32',
    disableDefaultUI: true,
    mapTypeControl: false,
    streetViewControl: false
  };
  gallPetersMap = new google.maps.Map(document.getElementById('map'),
      mapOptions);

  gallPetersMap.mapTypes.set('gallPetersMap', gallPetersMapType);
  gallPetersMap.setMapTypeId('gallPetersMap');

// Do custom markers
  doPoi(poi);

  getPlaces(locationFinder(), places);

  doRegions(regions);

  //Keep map in bounds
  // bounds of the desired area
  var allowedBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-3,-62.06875000000002),
      new google.maps.LatLng(86.525, 47.47695536124073)

  );
  var lastValidCenter = gallPetersMap.getCenter();

  google.maps.event.addListener(gallPetersMap, 'center_changed', function() {
      if (allowedBounds.contains(gallPetersMap.getCenter())) {
          // still within valid bounds, so save the last valid position
          lastValidCenter = gallPetersMap.getCenter();
          return;
      }

      // not valid anymore => return to last valid position
      gallPetersMap.panTo(lastValidCenter);
  });
}

  google.maps.event.addDomListener(window, 'load', initialize);


})();
