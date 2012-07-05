describe( "CSSDiff", function() {
  var cssDiff;

  beforeEach( function(){
    cssDiff = new CSSDiff();
  });

  describe( "compare", function(){

    it( "should be able to read two CSS strings", function(){
      cssStyles = ["a {color:red;}", "body{background:blue;}"];
      cssDiff.compare("a {color:red;}", "body{background:blue;}");
      expect(cssDiff.styles).toEqual(cssStyles);
    });

    it( "should be able to read an array of CSS strings", function(){
      cssStyles = ["a {color:red;}", "body{background:blue;}"];
      cssDiff.compare(cssStyles);
      expect(cssDiff.styles).toEqual(cssStyles);
    });

  });


});