var recordStore = require('../record_store')
var customer = require('../customer');
var assert = require('chai').assert;

describe('customer tester', function(){
  beforeEach(function(){
    customer.wallet = 30;
    customer.basket = [];
    recordStore.balance = 100;
    recordStore.stock = [
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
  })

  it('should')
})