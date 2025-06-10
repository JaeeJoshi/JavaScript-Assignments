//Write a function isEven that takes a number and returns true if it is even, otherwise false.

function isEven(number){
  if(number % 2 ===0){
    return true;
    console.log("true");
  }
  else{
    return false;
    console.log("false");
  }
}

const check = isEven(44);
console.log(check);