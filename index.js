var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var food = { [item]: Math.floor(Math.random() * 99)}
  cart.push(food)
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.")
  } else {
    var returnString = "In your cart, you have "
    for(var i = 0; i < cart.length; i++) {
      for(var list in cart[i]){
        returnString+=`${list} at $${cart[i][list]}`
          if(i!==cart.length-1){
            returnString+=", "
          } else {
            returnString+="."
          }
      }
    }
    return console.log(returnString)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
