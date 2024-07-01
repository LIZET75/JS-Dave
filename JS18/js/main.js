console.log("Chapter 18 Classes");
//Javascript Classes
class Pizza {
  constructor() {
    this.size = "medium";
    this.crust = "original";
  }
  bake() {
    console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);
  }
}

const myPizza = new Pizza();
myPizza.bake(); //Baking a medium original crust pizza.

//Second example passing a parameter type
class Pizza2 {
  constructor(pizzaType) {
    this.type = pizzaType;
    this.size = "medium";
    this.crust = "original";
  }
  bake() {
    console.log(
      `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
    );
  }
}

const myPizza2 = new Pizza2("pepperoni");
myPizza2.bake(); //Baking a medium original pepperoni crust pizza.

//example 3 passing a new parameter size
class Pizza3 {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
  }
  bake() {
    console.log(
      `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
    );
  }
}

const myPizza3 = new Pizza3("pepperoni", "small");
myPizza3.bake(); //Baking a small original pepperoni crust pizza.
console.log(myPizza3.type);

//CHANGE A PROPERTY THROUGH DOT NOTATION
myPizza3.type = "suppreme";
myPizza3.bake(); //Baking a small original supreme crust pizza.
console.log(myPizza3.type); //suppreme
