global.$ = global.jQuery  = require('jquery');
var helper = require('./helper.js');
var skillschart = require('./skillschart.js');
var gothamMap = require('./gothamMap.js');
var scrollTo = require('./vendor/jquery.scrollTo.min.js');
var localscroll = require('./vendor/jquery.localScroll.js');
var sticky = require('./vendor/jquery.sticky.js');

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});


/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      "x": x,
      "y": y
    }
  );
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  var xOff = loc.pageX;
  var yOff = loc.pageY;

  logClicks(xOff, yOff);
});



// Toggle for the mobile nav
$(function() {
  var menuToggle = $('#menu-toggle');
      menu       = $('.nav-list');
      menuHeight = menu.height();

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });
});

$(function() {
      var links = $('.nav-item');
          menu  = $('.nav-list');

  $(links).on('click', function() {
    var w = $(window).width();
    if( w < 768 ) {
      menu.slideToggle();
    }
  });
});

// Re-show the nav on window resize
function doneResizing(){
  $("#main-nav").sticky('update');
  var w = $(window).width();
  if(w > 768 && menu.is(':hidden')) {
        menu.removeAttr('style');
  }
}

// determine how much to offset the menu when scrolling.
function getMenuOffset(){
  var sticky = $('#main-nav-sticky-wrapper').hasClass('is-sticky');
  var w = $(window).width();
  var menuOffset;
    if ( w > 768 ) {
      menuOffset = 0;
    } else if ( sticky && w < 768 ){
      menuOffset = -57;
    } else if ( !sticky && w < 768 ){
      menuOffset = -377;
    } else {
      menuOffset = 0;
    }
    return menuOffset;
}

var places = require('./places.js');

// Include some provide mocks which will populate resume sections

var section = require('./section.js');
var work = require('./work.js');
var projects = require('./projects.js');
var bio = require('./bio.js');
var education = require('./education.js');

// append our map

$('#mapContainer').append(helper.googleMap);

// Run functions included in mock which append data to page.

work.putHtml();
bio.putHtml();
projects.putHtml();
education.putHtml();

$(window).resize(function() {
    clearTimeout(this.id);
    this.id = setTimeout(doneResizing, 300);
    this.id = setTimeout($('.chart').skillsChart('resize'), 300);
});



$('.main-nav').localScroll({
  onBefore: function(){
    this.offset = {
      top: getMenuOffset()
    };
  }
});
$('#main-nav').sticky({topSpacing:0});

// populate our d3 skillschart
$('.chart').skillsChart();
