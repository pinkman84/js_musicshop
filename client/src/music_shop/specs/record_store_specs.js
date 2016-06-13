var recordStore = require('../record_store');
var record = require('../record');
var assert = require('chai').assert;

describe ('shop test', function(){

  beforeEach(function(){
     recordStore1 = new recordStore('Tooooons', 'NYC')
     recordStore1.stock = []
     recordStore1.balance += 100
  })

  it('should have a name', function(){
    assert.equal('Tooooons', recordStore1.name);
  })

  it('should have a city', function(){
    assert.equal('NYC', recordStore1.city);
  })

  it('should be able to add a record', function(){
    recordStore1.addRecord('Tyrannosaurus Hives', 'The Hives', 10);
    assert.equal(1, recordStore1.stock.length);
  })

  it('buying should reduce balance', function(){
    recordStore1.addRecord('Tyrannosaurus Hives', 'The Hives', 10);
    assert.equal(90, recordStore1.balance);
  })

  it('should be able to sell a record', function(){
    recordStore1.addRecord('Tyrannosaurus Hives', 'The Hives', 10);
    recordStore1.addRecord('oasis', 'whats the story', 10);
    // console.log(recordStore1.stock)
    recordStore1.sellRecord('The Hives');
    assert.equal(90, recordStore1.balance);
  })

  it('should be able to take inventory', function(){
    recordStore1.addRecord('Tyrannosaurus Hives', 'The Hives', 10);
    assert.equal('We have The Hives by Tyrannosaurus Hives which retails at 10', recordStore1.inventory());
  })

  it('should be able to get a current value', function(){
    recordStore1.addRecord('Tyrannosaurus Hives', 'The Hives', 10);
    recordStore1.addRecord('Tyrannosaurus Hives', 'The Hives', 10);
    assert.equal("Your current stock value is £20 your current balance is £80", recordStore1.currentValue());
  })

})