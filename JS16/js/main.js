//User
// alert("hi");

//saving the return into console
// let myBoolean = confirm("OK === True\nCancel === False"); // \n is another line
// console.log(myBoolean);

// pop up prompt
// let id = prompt("Please enter your name.");
// console.log(id);

// pop up prompt & handle cancel button
let name = prompt("Please enter your name.");
if (name) {
  console.log(name.length);
  console.log(name.trim().length); //removes the white space
  console.log(name.trim());
} else {
  console.log("You didn't enter your name");
}
//nullish coalescing.  If no id entered, it returns a msn to console
