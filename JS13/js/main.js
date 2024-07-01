//Functions
function sum() {
  return 3 + 2;
}
//call function
console.log(sum()); //5 no parameter just returnng the body of function

// Adding 2 nums togeger
function sum2(num1, num2) {
  return num1 + num2;
}
console.log(sum2(2, 5)); //7

// Showing what is happening inside function
function sum3(num1, num2) {
  console.log(num1); //1
  console.log(num2); //2
  return num1 + num2;
}
console.log(sum3(1, 2));

// Showing what num2 is
function sum3(num1, num2) {
  console.log(num1); //1
  console.log(num2); // undefined
  return num1 + num2;
}
console.log(sum3(1));

// Adding 2 nums together and one does not have a value
function sum4(num1, num2) {
  return num1 + num2;
}
console.log(sum4(2)); //NaN

// Adding 2 nums togeger & placing a conditional when a num is not provided
function sum5(num1, num2) {
  if (num2 === undefined) {
    return num1 + num1;
  }
  return num1 + num2;
}
console.log(sum5(2)); //4

//Declaring a function
function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("lizet75@gmail.com")); //lizet

//Functions declared as anonymous
const getUserNameFromEmail2 = function (email) {
  return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail2("liza@gmail.com")); //liza

//ARROW FUNCTIONS  eliminate the word function and use arrow
const getUserNameFromEmail3 = (email) => {
  return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail3("arrow@gmail.com")); // arrow

//FUNCTION DECLARATION SYNTAX
const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("mARiA")); //September
