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
  }
  var returnString = `In your cart, you have `;
  if (cart.length === 1) {
    returnString += `${Object.keys*(cart[1])} at $${cart[0][Object.keys(cart[0])]}.`
  } else if (cart.length === 2) {
    returnString += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
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
