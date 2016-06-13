var recordStore = require('../record_store')
var customer = require('../customer');
var assert = require('chai').assert;

describe('customer tester', function(){
  beforeEach(function(){
    cust = new customer('Aidan', 50);
    rs = new recordStore('music shop', 'Edinburgh')
    rs.balance = 100;
    rs.stock = [
    {
      artist: 'Franz Ferdinand',
      title: 'Franz Ferdinand',
      price: 12    
    },
    {
      artist: 'Oasis',
      title: 'Definately Maybe',
      price: 15    
    }
    ]
  });

  it('should have a name', function(){
    assert.equal('Aidan', cust.name);
  });

  it('should have money', function(){
    assert.equal(50, cust.wallet);
  });

  it('should be able to buy a record', function(){
    cust.buyRecord(rs, 'Franz Ferdinand');
    // console.log(rs.stock);
    console.log(cust.basket);
    assert.deepEqual({
      artist: 'Franz Ferdinand',
      title: 'Franz Ferdinand',
      price: 12    
    }, cust.basket[0])
  //   assert.equal(1, cust.basket.length)
  });

  it('should reduce funds', function(){
    cust.buyRecord(rs, 'Franz Ferdinand');
    console.log(cust.basket);
    assert.equal(38, cust.wallet);
  }
  );


})