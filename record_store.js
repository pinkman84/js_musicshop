var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.stock = [];
  this.balance = 0;
}

RecordStore.prototype = {
  addRecord: function(a, t, p){
    this.stock.push({
      artist: a,
      title: t,
      price: p
    })
    this.balance -= p
    },
    inventory: function(){
      for(album of this.stock){
        var inventory =  ('We have ' + album.title + ' by ' + album.artist + ' which retails at ' + album.price)
      }
      return inventory
    },
    //need to make a list inventory function, so loop through this.stock and return each records name might be nice to add a quantity option too.

    sellRecord: function(title){
      for(var i = 0; i < this.stock; i++){
        if(this.stock[i].title === title){
          return this.balance += this.stock[i].price;
          this.stock.splice(i, 1);

        }
        // var newBalance = "Your new balance is " + this.balance
        // return newBalance
      }
    },
    //make a sell method, have to think about who is responcible does the customer buy or the record store sell in either case the record.price will need to add onto this.balance

    currentValue: function(){
      stockValue = 0
      for (albums of this.stock){
        stockValue += albums.price
        var statement = ("Your current stock value is £" + stockValue + " your current balance is £" + this.balance)
      }
      return statement
    }

    //make a function that loops through stock and return the total record.name, record.price and the total of record.price aswell as this.balance
  
}

module.exports = RecordStore;