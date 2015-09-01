var d3 = require('d3');
var $ = require('jquery');
var skillschart = (function($, d3){
  var json;
  var bar;
  var elem = ".chart";

  var margin = {top: 30, right: 20, bottom: 30, left: 20};
  var width = parseInt(d3.select('.chart').style('width'), 10);
      width = width - margin.left;
  var barHeight = 40;

  // Linear Scale for the horz / x-axis ( bar values  )
  var x = d3.scale.linear()
      .range([0, width]);

  // Ordinal Scale for the vert / y-axis ( skill names )
  var y = d3.scale.ordinal();

  // Additional scale for skill level thresholds
  var q = d3.scale.ordinal()
          .domain(['Novice', 'Skilled', 'Expert'])
          .rangeBands([0, width]);

  // The axis label for thresholds & the divider
  var xAxis = d3.svg.axis()
          .tickSize(1)
          .scale(q)
          .orient("bottom");

  // Axis for our grid ( vertical grey lines behind bars )
  var gridAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom")
          //.ticks(3)
          .tickValues([5,10])
          .tickSize(width, 0)
          .tickFormat("");

  // Append root svg to our div, give it a width
  var svg = d3.select(".chart").append("svg")
      .attr("width", width);

  function type(d) {
    d.value = +d.value; // coerce to number
    return d;
  }

  function doBarTextMargin (d) {
    if ( window.innerWidth < 465 ) {
      return (barHeight - (barHeight * 0.35));
    } else if ( window.innerWidth > 465 && window.innerWidth < 520 ) {
      return (barHeight - (barHeight * 0.32));
    } else if ( window.innerWidth > 520 ) {
      return (barHeight - (barHeight * 0.30));
    }
  }

  methods = {
    init: function() {
      d3.json("mock/bullets.json", function(error, data) {
        json = data;
        // Map our domains, because we didn't earlier
        x.domain([0, d3.max(data, function(d) { return d.value; })]);
        y.domain(data.map(function(d) { return d.name; }));

        //Set a height for the root svg element (inside json because it requires data.length to compute)
        svg.attr("height", function(d, i) { return ( ( barHeight + 3 ) * data.length ) + (barHeight / 2 );});

        // append our grid ( grey guidelines )
        svg.append("g")
          .attr("class", "grid")
          .attr("transform", function(d, i) { return "translate("+ margin.left +",0)"; })
          .call(gridAxis);

        svg.selectAll(".grid line")
            .attr("y2", function(d, i) { return ( ( barHeight + 3 ) * data.length ) + (barHeight / 2 ) - 20;});

        // append groups which hold our bars
        // give them bar-parent class ( for isolating their selection )
        // transform each one by 'barHeight' multiplied by the number
        // of iterations 'i'
        bar = svg.selectAll(".bar-parent")
          .data(data)
        .enter().append("g")
          .attr("class", "bar-parent")
          .attr("transform", function(d, i) { return "translate(" + (margin.left) + "," + i * ( barHeight + 1 ) + ")"; });

        // append our rectangles ( the colored bars )
        // get the corresponding value from our data in in x domain.
        // barHeight - 5 ( as padding between bars )
        bar.append("rect")
            .attr("class", "bars")
            .attr("width", function(d) { return x(d.value); })
            .attr("height", barHeight - 5);

        // append text to the bars ( skill names )
        // return x(0.2) gives them some padding from the edge
        // ( y.rangeBand() / 2 ) - 5 ) - Adjust them to the center of the bars
        bar.append("text")
            .attr("x", function(d) { return 10 ;})
            .attr("y", ( ( y.rangeBand() / 2 ) - 5 ) )
            //.attr("dy", function(d) { return (barHeight - (barHeight * 0.30)) })
            .attr("dy", doBarTextMargin())
            .text(function(d) { return d.name; });

        // append a new grou pfor our x axis
        // using transform: move our axis labels ( skill names )
        // to the bottom of the page. barHeight * # of elements in the data set.
        svg.append("g")
            .attr("class", "xAxis")
            .attr("transform", function(d, i) { return "translate(" + margin.left + "," + ((barHeight + 2) * data.length ) + ")"; })
            .call(xAxis);

        svg.selectAll(".tick text")
            .attr("transform", function(d, i) { return "translate(0," + 8 + ")"; });

        return json;
      });
    },
    resize: function() {

      // reset our width values ( scope changed )
    width = parseInt(d3.select('.chart').style('width'), 10);
    width = width - margin.left - margin.right;

    // resize the base element "svg"
    svg.attr("height", function(d, i) { return ((barHeight + 3) * json.length ) + (barHeight / 2 );})
        .attr('width', (width + margin.left ) + 'px');

    // Reset ranges ( affects grid & x-axis label )
    x.range([0, width]);
    q.rangeBands([0, width]);

    // Reloads the axes now that the ranges are set.
    svg.select('.grid').call(gridAxis);
    svg.select('.xAxis').call(xAxis);

    // resize the colored bars last because they depend on axis for scale
    bar.selectAll("rect")
        .attr("width", function(d) { return x(d.value); });


    // Correct centering of bar labels based on window size ( which determines
    // font size within the css ).
    bar.selectAll("text")
      .attr("dy", doBarTextMargin());
    }
  };

  $.fn.skillsChart = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
})($, d3);

module.exports = skillschart;
