var should = require( "should" ),
  objectToHash = require( ".." ),
  dummy = require( "./dummy" );

describe( "sc-object-to-string", function () {

  dummy.data.tests.forEach( function ( _test, _i ) {

    it( "should convert object test " + _i + " to a string", function () {
      var stringified = objectToHash.stringify( _test.object ),
        hashed = objectToHash( _test.object );

      stringified.should.eql( _test.stringified );
      hashed.should.eql( _test.hashed );
    } );

  } );

} );