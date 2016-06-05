var Customer = function(name, wallet){
  this.name = name;
  this.wallet = wallet;
  this.basket = [];
}


Customer.prototype = {
  //assign a splice to the inventory array where the record parameter = stock that comes back. ie perform a loop with an if statement, then .push() the variable into this.basket as an added feature this should also reduce the wallet amount by the record price 
  buyRecord: function(shop, record){
    for(i = 0; i < shop.inventory.length; i++){
      if(shop.inventory[i].title === record){
        var purchase = shop.inventory[i]
        shop.sellRecord(record);
      }
      this.wallet -= purchase.price
      this.basket.push(purchase)
    }
  },

  sellRecord: function(title){

  }

}

module.exports = Customer;