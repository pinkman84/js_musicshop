/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Viewer = __webpack_require__(5)
	var RecordStore = __webpack_require__(1);
	var sampleStock = __webpack_require__(2);
	var Record = __webpack_require__(3);
	var Customer = __webpack_require__(4)
	
	
	window.onload = function(){
	
	
	  var recordStore = new RecordStore("Holy's hit Records", "Edinburgh");
	
	  for(stock of sampleStock){
	    recordStore.addRecord(stock.artist, stock.title, stock.price)
	  }
	
	  var viewer = new Viewer(recordStore);
	  viewer.render();
	  // console.log(recordStore.stock);
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	var RecordStore = function(name, city){
	  this.name = name;
	  this.city = city;
	  this.stock = [];
	  this.balance = 0;
	};
	
	RecordStore.prototype = {
	  addRecord: function(a, t, p){
	    this.stock.push({
	      artist: a,
	      title: t,
	      price: p
	    });
	    this.balance -= p;
	    },
	    inventory: function(){
	      var stock = document.getElementById('stock');
	      for(album of this.stock){
	        albumList = document.createElement('li');
	        albumList.innerText = "Album: " + album.title + "\n" +
	                              "Artist: " + album.artist + "\n" +
	                              "Price: " + album.price
	            stock.appendChild(albumList);
	      }
	      // return inventory;
	    },
	    //need to make a list inventory function, so loop through this.stock and return each records name might be nice to add a quantity option too.
	
	    sellRecord: function(title){
	      for(var i = 0; i < this.stock.length; i++){
	        if(this.stock[i].title === title){
	           this.stock.splice(i, 1);
	          this.balance += this.stock[i].price;
	         
	
	        }
	        // var newBalance = "Your new balance is " + this.balance
	        // return newBalance
	      }
	    },
	    //make a sell method, have to think about who is responcible does the customer buy or the record store sell in either case the record.price will need to add onto this.balance
	
	    currentValue: function(){
	      stockValue = 0;
	      for (albums of this.stock){
	        stockValue += albums.price;
	        var statement = ("Your current stock value is £" + stockValue + " your current balance is £" + this.balance);
	      }
	      return statement;
	    }
	
	    //make a function that loops through stock and return the total record.name, record.price and the total of record.price aswell as this.balance
	  
	};
	
	module.exports = RecordStore;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = [
	  {
	    "artist": "Oasis",
	    "title": "Definitely Maybe",
	    "price": 10
	  },
	  {
	    "artist": "The Hives",
	    "title": "Tyranosaurus Hives",
	    "price": 12
	  },
	  {
	    "artist": "Foo Fighters",
	    "title": "One By One",
	    "price": 11.50
	  },
	  {
	    "artist": "Green Day",
	    "title": "Nimrod",
	    "price": 15
	  },
	  {
	    "artist": "Tenacious D",
	    "title": "Tenacious D",
	    "price": 50
	  }
	]

/***/ },
/* 3 */
/***/ function(module, exports) {

	var Record = function(artist, title, price){
	  this.artist = artist;
	  this.title = title;
	  this.price = price;
	}
	
	module.exports = Record;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var Customer = function(name, wallet){
	  this.name = name;
	  this.wallet = wallet;
	  this.basket = [];
	}
	
	
	Customer.prototype = {
	  //assign a splice to the inventory array where the record parameter = stock that comes back. ie perform a loop with an if statement, then .push() the variable into this.basket as an added feature this should also reduce the wallet amount by the record price 
	  buyRecord: function(shop, record){
	    // console.log("SHOP", shop);
	    for(i = 0; i < shop.stock.length; i++){
	      if(shop.stock[i].title === record){
	        var purchase = shop.stock[i];
	      
	      }
	      this.wallet -= purchase.price;
	      this.basket.push(purchase);
	      shop.sellRecord(purchase);
	      break
	      // console.log(purchase.price);
	      
	     
	    }
	    // return this.basket
	  },
	
	  sellRecord: function(title, shop){
	    for(i = 0; i < this.basket.length; i++){
	      if(this.basket[i].title === title ){
	        this.basket.splice(i, 1);
	        this.wallet += this.basket.price;
	        this.shop.addRecord(this.basket[i]);
	      }
	    }
	  }
	
	}
	
	module.exports = Customer;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var RecordStore = __webpack_require__(1);
	var sampleStock = __webpack_require__(2);
	var Record = __webpack_require__(3);
	var Customer = __webpack_require__(4);
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map