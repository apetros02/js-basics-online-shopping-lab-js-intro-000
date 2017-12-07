var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ [item]: Math.floor(Math.random() * 100)})
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.")
  }
  var returnString = `In your cart, you have `;
  if (cart.length === 1) {
    returnString += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
  } else if (cart.length === 2) {
    returnString += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
  } else {
    for (var i = 0; i < cart.length; i++) {
      var prep;
      if (i === cart.length - 2) {
        prep = ", and ";
      } else if (i === cart.length-1) {
        prep = "";
      } else {
        prep = ", ";
      }
      returnString += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}` + prep + `${i === cart.length - 1 ? '.' : ''}`;
    }
  }
  return console.log(returnString)
}

function total() {
  var total = 0;
  for (var i = 0; i <= cart.length-1; i++) {
    total += Object.(cart[i]);
  }
  return console.log(`$` + total);
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
