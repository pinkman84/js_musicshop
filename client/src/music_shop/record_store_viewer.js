var RecordStore = require('./record_store.js');
var sampleStock = require('../sample.json');
var Record = require('./record.js');
var Customer = require('./customer.js');

var Viewer = function(musicShop){

    this.shop = musicShop;
    console.log(this.shop);
}

Viewer.prototype = {

  render: function(){

  var info = document.getElementById('info');
  var stock = document.getElementById('stock');

  info.innerText = "Welcome to " + this.shop.name + ", Proudly serving " + this.shop.city + " for all your music needs."


  for (album of this.shop.stock){
    albumList = document.createElement('li');
    albumList.innerText = "Album: " + album.title + "\n" +
                          "Artist: " + album.artist + "\n" +
                          "Price: " + album.price
    stock.appendChild(albumList);
  }
  var newArtist = document.getElementById('artist')
  var newTitle = document.getElementById('title')
  var newPrice = document.getElementById('price')
  var addStock = document.getElementById('add-stock')
  addStock.onclick = function(){
    stock.innerHtml =""
    this.shop.addRecord(newArtist, newTitle, newPrice)
    this.shop.inventory();
    
  }.bind(this);
  }
}

module.exports = Viewer;