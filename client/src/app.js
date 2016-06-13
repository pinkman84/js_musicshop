var Viewer = require('./music_shop/record_store_viewer.js')
var RecordStore = require('./music_shop/record_store.js');
var sampleStock = require('./sample.json');
var Record = require('./music_shop/record.js');
var Customer = require('./music_shop/customer.js')


window.onload = function(){


  var recordStore = new RecordStore("Holy's hit Records", "Edinburgh");

  for(stock of sampleStock){
    recordStore.addRecord(stock.artist, stock.title, stock.price)
  }

  var viewer = new Viewer(recordStore);
  viewer.render();
  // console.log(recordStore.stock);
}