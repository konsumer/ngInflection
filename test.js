/**
 * This is a test of inflection, not ngInflection.
 */

var inflection = require( 'inflection' );
var should     = require( 'should' );

/*global describe, it, before, beforeEach, after, afterEach */

describe( 'test .version', function (){
  it( 'should match proper version format', function (){
    inflection.version.should.match( /^\d+\.\d+\.\d+$/ );
  });
});

describe( 'test .indexOf', function (){
  it( 'should return proper index key', function (){
    inflection.indexOf([ 'hi','there' ], 'guys' ).should.equal( -1 );
    inflection.indexOf([ 'hi','there' ], 'hi' ).should.equal( 0 );
  });
});

describe( 'test .pluralize', function (){
  it( 'should pluralize the given word', function (){
    inflection.pluralize( 'people' ).should.equal( 'people' );
    inflection.pluralize( 'men' ).should.equal( 'men' );
    inflection.pluralize( 'person' ).should.equal( 'people' );
    inflection.pluralize( 'octopus' ).should.equal( 'octopi' );
    inflection.pluralize( 'Hat' ).should.equal( 'Hats' );
    inflection.pluralize( 'data' ).should.equal( 'data' );
    inflection.pluralize( 'meta' ).should.equal( 'meta' );
    inflection.pluralize( 'person', 'guys' ).should.equal( 'guys' );
  });
});

describe( 'test .singularize', function (){
  it( 'should singularize the given word', function (){
    inflection.singularize( 'status' ).should.equal( 'status' );
    inflection.singularize( 'child' ).should.equal( 'child' );
    inflection.singularize( 'children' ).should.equal( 'child' );
    inflection.singularize( 'address' ).should.equal( 'address' );
    inflection.singularize( 'person' ).should.equal( 'person' );
    inflection.singularize( 'people' ).should.equal( 'person' );
    inflection.singularize( 'movies' ).should.equal( 'movie' );
    inflection.singularize( 'queries' ).should.equal( 'query' );
    inflection.singularize( 'octopi' ).should.equal( 'octopus' );
    inflection.singularize( 'Hats' ).should.equal( 'Hat' );
    inflection.singularize( 'data' ).should.equal( 'datum' );
    inflection.singularize( 'meta' ).should.equal( 'metum' );
    inflection.singularize( 'guys', 'person' ).should.equal( 'person' );
  });
});

describe( 'test .camelize', function (){
  it( 'should camelize the given word', function (){
    inflection.camelize( 'message_properties' ).should.equal( 'MessageProperties' );
    inflection.camelize( 'message_properties', true ).should.equal( 'messageProperties' );
    inflection.camelize( 'Message_Properties' ).should.equal( 'MessageProperties' );
    inflection.camelize( 'Message_Properties', true ).should.equal( 'messageProperties' );
    inflection.camelize( 'MESSAGE_PROPERTIES' ).should.equal( 'MESSAGEProperties' );
    inflection.camelize( 'MESSAGE_PROPERTIES', true ).should.equal( 'mESSAGEProperties' );
    inflection.camelize( 'fooBar_Baz', true ).should.equal( 'fooBarBaz' );
    inflection.camelize( 'FooBar_Baz', true ).should.equal( 'fooBarBaz' );
    inflection.camelize( 'fooBar_fooBaz', true ).should.equal( 'fooBarFoobaz' );
    inflection.camelize( 'FooBar_FooBaz', true ).should.equal( 'fooBarFoobaz' );
    inflection.camelize( 'FooBar' ).should.equal( 'FooBar' );
    inflection.camelize( 'FooBar', true ).should.equal( 'fooBar' );
    inflection.camelize( 'Foo/Bar', true ).should.equal( 'foo::Bar' );
    inflection.camelize( 'Foo/Bar' ).should.equal( 'Foo::Bar' );
  });
});

describe( 'test .underscore', function (){
  it( 'should transform the given word with underscore', function (){
    inflection.underscore( 'MessageProperties' ).should.equal( 'message_properties' );
    inflection.underscore( 'messageProperties' ).should.equal( 'message_properties' );
    inflection.underscore( 'MP' ).should.equal( 'm_p' );
    inflection.underscore( 'MP', true ).should.equal( 'MP' );
  });
});

describe( 'test .humanize', function (){
  it( 'should humanize the given word', function (){
    inflection.humanize( 'message_properties' ).should.equal( 'Message properties' );
    inflection.humanize( 'message_properties', true ).should.equal( 'message properties' );
  });
});

describe( 'test .capitalize', function (){
  it( 'should capitalize the given word', function (){
    inflection.capitalize( 'message_properties' ).should.equal( 'Message_properties' );
    inflection.capitalize( 'message properties' ).should.equal( 'Message properties' );
  });
});

describe( 'test .dasherize', function (){
  it( 'should dasherize the given word', function (){
    inflection.dasherize( 'message_properties' ).should.equal( 'message-properties' );
    inflection.dasherize( 'Message Properties' ).should.equal( 'Message-Properties' );
  });
});

describe( 'test .titleize', function (){
  it( 'should titleize the given word', function (){
    inflection.titleize( 'message_properties' ).should.equal( 'Message Properties' );
    inflection.titleize( 'message properties to keep' ).should.equal( 'Message Properties to Keep' );
  });
});

describe( 'test .demodulize', function (){
  it( 'should demodulize the given word', function (){
    inflection.demodulize( 'Message::Bus::Properties' ).should.equal( 'Properties' );
  });
});

describe( 'test .tableize', function (){
  it( 'should tableize the given word', function (){
    inflection.tableize( 'people' ).should.equal( 'people' );
    inflection.tableize( 'MessageBusProperty' ).should.equal( 'message_bus_properties' );
  });
});

describe( 'test .classify', function (){
  it( 'should classify the given word', function (){
    inflection.classify( 'message_bus_properties' ).should.equal( 'MessageBusProperty' );
  });
});

describe( 'test .foreign_key', function (){
  it( 'should transform the given word to foreign_key', function (){
    inflection.foreign_key( 'MessageBusProperty' ).should.equal( 'message_bus_property_id' );
    inflection.foreign_key( 'MessageBusProperty', true ).should.equal( 'message_bus_propertyid' );
  });
});

describe( 'test .ordinalize', function (){
  it( 'should ordinalize the given word', function (){
    inflection.ordinalize( 'the 1 pitch' ).should.equal( 'the 1st pitch' );
  });
});

describe( 'test .transform', function (){
  it( 'should transform the given word with given methods', function (){
    inflection.transform( 'all job', [ 'pluralize', 'dasherize' ] ).should.equal( 'all-jobs' );
    inflection.transform( 'all job', [ 'pluralize', 'anInvalidMethod' ] ).should.equal( 'all jobs' );
    inflection.transform( 'all job', [ 'capitalize', 'pluralize', 'dasherize' ] ).should.equal( 'All-jobs' );
  });
});