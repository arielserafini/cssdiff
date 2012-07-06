describe( "CSSDiff", function() {
  var cssDiff;
  var cssStyles;

  beforeEach( function() {
    cssDiff = new CSSDiff();
  });

  describe( "compare", function() {

    it( "should be able to take two CSS strings as input", function() {
      cssStyles = ["a {color:red;}", "body{background:blue;}"];
      cssDiff.compare("a {color:red;}", "body{background:blue;}");
      expect(cssDiff.styles).toEqual(cssStyles);
    });

    it( "should be able to read the first of two CSS strings", function() {
      cssStyles = ["a {color:red;}", "body{background:blue;}"];
      cssDiff.compare("a {color:red;}", "body{background:blue;}");
      expect(cssDiff.styles[0]).toEqual("a {color:red;}");
    });

    it( "should be able to take an array of CSS strings as input", function() {
      cssStyles = ["a {color:red;}", "body{background:blue;}"];
      cssDiff.compare(cssStyles);
      expect(cssDiff.styles).toEqual(cssStyles);
    });

    it( "should be able to take an object as input", function() {
      cssStyles = {firstStyle: "a {color:red;}", secondStyle: "body{background:blue;}"};
      cssDiff.compare(cssStyles);
      expect(cssDiff.styles).toEqual(cssStyles);
    });

  });


});