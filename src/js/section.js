var $ = require('jquery');
var section = (function(object){
  this.data = object;

  // append formatted items to the provided html element
  this.doAppend = function ( element, item, prepend ) {
    if(typeof(prepend) === 'undefined' || prepend === false || prepend === 'false' ) {
      $(element).append(item);
    } else if ( prepend !== false && prepend !== 'false') {
      $(element).prepend(item);
    }
  };

  // replace %data% with a given item and return it
  this.doFormat = function ( item, formatter ) {
    var formatted = formatter.replace('%data%', item );
    return formatted;
  };

  // Return an pair of dates as a string delimited with ' - ' ex. 2001 - 2003
  this.doDates = function ( array ){
    var i = 0;
    var dateString = '';
    while ( i < array.length ){
      if ( (array.length - i ) > 1 ) {
        dateString += (array[i] + ' - ' );
      } else if ( (array.length - i ) <= 1 ) {
        dateString += array[i] ;
      }
      i++;
    }
    return dateString;
  };
});

module.exports = section;
