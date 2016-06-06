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