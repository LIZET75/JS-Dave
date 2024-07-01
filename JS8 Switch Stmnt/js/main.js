// console.log("Hello World");
// console.log(typeof "Yolanda");
// console.log(typeof 42);
// console.log(typeof true);
// console.log(typeof { Name: "Jon" });

// JS 3 //STRINGS
const myVariable = "Maths";

// console.log(myVariable)
// // The length property
// console.log(myVariable.length)
// console.log("dave".length)

// //charAt Returns the position it is at
// console.log(myVariable.charAt(0))
//indexofmethod
// console.log(myVariable.indexOf("Mat")); //0
// console.log(myVariable.indexOf("mat")); //-1
// console.log(myVariable.indexOf("a")); //1
// console.log(myVariable.lastIndexOf("Mat")); //0
// console.log(myVariable.lastIndexOf("a")); //1
// //Slice (st, end ) -> returns the middle but not the ending position
// console.log(myVariable.slice(5, 8)); //mat
// //No ending, will return all
// console.log(myVariable.slice(5)); //mat
// // If ending is < starting , noting will be returned
// //If ending positon is one > start, nothing only char at start will be returned
// //toUpperCase does not need param
// console.log(myVariable.toUpperCase()); //MATHS
// //includes returns boolean
// console.log(myVariable.includes("div")); //false
// //SPLIT SPLITS STRING WHERE CHAR OCCURS
// console.log(myVariable.split("h")); //['Mat', 's']
// console.log(myVariable.split("")); //  ['M', 'a', 't', 'h', 's']
// console.log("Jon, Hoe, Dave".split(",")); //  ['Jon', ' Hoe', ' Dave']

//js7

//Conditionals If Statements
//syntax
let soup = "chicken noodle soup";
let reply;
//soup = true
if (soup) {
  reply = `Here's your order of ${soup}`;
} else {
  reply = `Sorry,we're out of ${soup}`;
}
console.log(reply);

// tacos is undefined
let tacos;
if (tacos) {
  reply = `Here's your order of ${tacos}`;
} else {
  reply = `Sorry,we're out of ${tacos}`;
}
console.log(reply);

// no else statement returns last stmnt
//fif water ="", returns second stmnt
let water = " ";
if (water) {
  reply = `Here's your order of ${water}`;
} else {
  reply = "Sorry,we're out of water";
}

console.log(reply);

// u are not allowed here
let customerIsBanned = true;
let salad = "";
if (customerIsBanned) {
  reply = "you are not allowed here";
} else if (salad) {
  reply = "here is your salad";
} else {
  reply = "Do you need anything";
}

console.log(reply);

// u are not allowed here
let customerBanned = false;
let chocolate = "chocolate desert";
let crackers = false;
if (customerBanned) {
  reply = "you are not allowed here";
} else if (chocolate && crackers) {
  reply = "here is your desert"; //This statement needs to be first
} else if (chocolate) {
  reply = "here is your chocolate";
} else {
  reply = "Do you need anything";
}

console.log(reply);

//college student
let testScore = 40;
let grade;
let collegeStudent = false;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else {
  if (collegeStudent) {
    grade = "U";
  } else {
    grade = "F";
  }
}
console.log(grade);

//rock scisors
if(playerOne === computer) {
    //tie game!

} else if(playerOne ==="rock){
    if(computer ==="paper"){
        //computer wins
    } else {
        //plater wins
    
} else if {(playerOne === "paper") {
    if(computer==="scissors") {
        //computer wins

    }else {
        //plerOne wins
    }
}

}
