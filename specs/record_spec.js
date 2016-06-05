var record = require('../record');
var assert = require('chai').assert;

describe('record test', function(){

  beforeEach(function(){
    rec1 = new record('Ash', 'Meltdown', 9);
    rec2 = new record('Kaiser Chiefs', 'Employment', 11);
    rec3 = new record('Foo Fighters', 'In Your Honour', 10);
  })

  it('should have a name', function(){
    assert.equal('Ash', rec1.artist);
  })

  it('should have a title', function(){
    assert.equal('Employment', rec2.title);
  })

  it('should have a price', function(){
    assert.equal(10, rec3.price)
  })

})