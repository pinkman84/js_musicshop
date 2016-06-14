var RecordStore = require('./record_store.js');
var sampleStock = require('../sample.json');
var Record = require('./record.js');
var Customer = require('./customer.js');

var Viewer = function(musicShop){

    this.shop = musicShop;
    // console.log(this.shop);
}

Viewer.prototype = {

  render: function(){

  var info = document.getElementById('info');
  // var stock = document.getElementById('stock');

  info.innerText = "Welcome to " + this.shop.name + ", Proudly serving " + this.shop.city + " for all your music needs."

  this.shop.inventory();

  },

  newStock: function(){
    var addStock = document.getElementById('add-stock')
    var newArtist = document.getElementById('#artist');
    var newTitle = document.getElementById('#title');
    var newPrice = document.getElementById('#price');
    addStock.onclick = function(){
    
  
      this.shop.addRecord(newArtist.value, newTitle.value, newPrice.value)
      this.shop.inventory();
      this.render();
      }.bind(this); console.log(this.shop.stock);
    }
}

module.exports = Viewer;