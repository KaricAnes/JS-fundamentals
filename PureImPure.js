//pure function
//Ovisi samo o productPrice-u. Nema externih varijabli. 

function priceAfterTax(productPrice) {
  return productPrice * 0.2 + productPrice;
}

//impure function
//Ovisi o vanjskoj varijabli tax

var tax = 20;
function calculateTax(productPrice) {
  return productPrice * (tax / 100) + productPrice;
}


//The reducer is a pure function that takes the previous state and an action, and returns the next state.