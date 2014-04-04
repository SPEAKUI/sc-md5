var should = require( "should" ),
  md5 = require( ".." );

describe( "sc-md5", function () {

  it( "The main point for this module is to be able to convert anything that can be `JSON.stringify` to an md5 hash. Specifically an `object`", function () {
    var hash = md5( {
      name: "David",
      age: 30
    } );

    hash.should.equal( "0699d2ce6d18ca8c8a993c6905e3bf9d" );
  } );

} );