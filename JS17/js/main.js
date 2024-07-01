//OBJECTS
//KEY VALUE PAIRS IN CURLY BRACES
console.log("********** SYNTAX OF AN OBJECT****");
console.log("How to call properties, dot vs [] notation & keyword this");
const myObj = { name: "Dave" };

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "Coffee",
    afternoon: "Iced Tea",
  },
  //action is a method name
  action: function () {
    //anonymous function
    return "Hello World";
  },

  //remember that when using objects U need to reference the word this and the key property.
  //This refers to the object
  action2: function () {
    return `Put an Object literal ${this.alive}`;
  },
  // I can use [] notation
  action3: function () {
    return `Time for  ${this["beverage"].morning}`;
  },
};
console.log(anotherObj.hobbies[0]); //Eat
//*** NOTE!!! with objects we can also use [""]****
console.log(anotherObj["hobbies"][0]); // Eat
console.log(anotherObj["beverage"]); //{morning: 'Coffee', afternoon: 'Iced Tea'}
console.log(anotherObj.beverage); //{morning: 'Coffee', afternoon: 'Iced Tea'}
console.log(anotherObj.beverage.morning); // Coffee
console.log(anotherObj.action()); // Hello World
console.log(anotherObj.action2()); //Put an Object literal true
console.log(anotherObj.action3()); //Time for Coffee
console.log("**********************");

console.log("OBJECT vehicle");
console.log("How to inherit properties & how to use Object.create");
const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrrooom!";
  },
};
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck); //{doors:2}
console.log(truck.wheels); //4 inhering properties
console.log(truck.engine()); //Vrrooom! inhering properties

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Whooosh!";
};
console.log(car.engine()); //Whoosh! Overwrote the inherited method
console.log(car.doors); //4
console.log(car.wheels); //4

const tesla = Object.create(car);
console.log("tesla has " + tesla.wheels); //tesla has 4
console.log("tesla has " + tesla.engine()); //tesla has 4
console.log("**********************");

console.log("OBJECT Band");
console.log(
  "How to use Object.keys,values for(let in) loop for objects, and call in keys and values using object[keyword, not to use for loops in objects, deleting a property]"
);
const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "Jonn Paul Jones",
  drums: "John Bonham",
};
console.log(Object.keys(band)); //['vocals', 'guitar', 'bass', 'drums']
console.log(Object.values(band)); // ['Robert Plant', 'Jimmy Page', 'Jonn Paul Jones', 'John Bonham']
//band=object, //performer=value
for (let performer in band) {
  console.log(band[performer]); // Prints the names of the participants in the band
}
//this can't be used as objects don't have length property!!!!
for (i = 0; i < band.length; i++) {
  console.log(band[i]);
}
//to print ${value} = instument ${band[value]=name of performer}
for (let value in band) {
  console.log(`On ${value}, it's ${band[value]}!`);
}
///DELETING A PROPERTY
delete band.drums;
console.log(
  "CHECK FOR THE PROPERTY MISSING AFTER DELETING IT 3 WAYS FOR(LET IN), VALUES AND hasOwnProperty to return Boolean"
);
for (let performer in band) {
  console.log(band[performer]);
}
console.log(Object.values(band));
console.log(band.hasOwnProperty("drum"));
console.log("************************");

///DESTRUCTURING OBJECTS
console.log("DESTRUCURING OBJECTS");
const { guitar: myVariable, bass: myBass } = band;
console.log(myVariable);
console.log(myBass);
