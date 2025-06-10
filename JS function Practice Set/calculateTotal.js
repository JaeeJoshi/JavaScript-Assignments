//Write a function called calculateTotal that takes price and quantity as parameters.
//Use a helper function named multiply that multiplies two numbers.

function multiply(a, b) {
  return a * b;
}

function calculateTotal(price, quantity) {
  return multiply(price, quantity);
}

// Example usage:
const final = calculateTotal(50, 3);
console.log(final);  

