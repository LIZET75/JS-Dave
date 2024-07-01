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
console.log(myVariable.indexOf("Mat")); //0
console.log(myVariable.indexOf("mat")); //-1
console.log(myVariable.indexOf("a")); //1
console.log(myVariable.lastIndexOf("Mat")); //0
console.log(myVariable.lastIndexOf("a")); //1
//Slice (st, end ) -> returns the middle but not the ending position
console.log(myVariable.slice(5, 8)); //mat
//No ending, will return all
console.log(myVariable.slice(5)); //mat
// If ending is < starting , noting will be returned
//If ending positon is one > start, nothing only char at start will be returned
//toUpperCase does not need param
console.log(myVariable.toUpperCase()); //MATHS
//includes returns boolean
console.log(myVariable.includes("div")); //false
//SPLIT SPLITS STRING WHERE CHAR OCCURS
console.log(myVariable.split("h")); //['Mat', 's']
console.log(myVariable.split("")); //  ['M', 'a', 't', 'h', 's']
console.log("Jon, Hoe, Dave".split(",")); //  ['Jon', ' Hoe', ' Dave']
