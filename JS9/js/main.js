let soup = "Chicken noodle soup";
let isCustomerBanner = false;
let soupAccess = isCustomerBanner
  ? "Sorry, no soup for You!"
  : soup //second ternary operator
  ? `Yes, we have ${soup} today`
  : "Sorry, no soup today";

let response = soup ? "yes, we have soup" : "Sorry, no soup today";
console.log(response);
console.log(soupAccess);

let testScore = 79;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : "F";
console.log(`My test grade is ${myGrade}`);
