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
