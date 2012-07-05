var CSSDiff = function CSSDiff() {};

// provides the comparison feature between two (or more?) style definitions
CSSDiff.prototype.compare = function(stylesArray) {

  // should we treat the styles as an array?
  if ( stylesArray && typeof(stylesArray) === "object" ) {
    this.styles = stylesArray;

  // if not, use the arguments array
  } else {
    this.styles = arguments;
  }


};