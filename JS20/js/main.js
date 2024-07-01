// types of errors
//1ReferenceError
// name = "Dave";
// console.log(name);
//2 SyntaxError
//3TypeError
// const name = "Dave";
//     name = "Joe";
//4 Use Try Catch block SYNTAX!!!!
// const makeError = () => {
//   try {

//   } catch(error) {
//     console.error(e) // it can be e, catchID, error
//   }
// }

// use console.error()
// const makeError = () => {
//   try {
//     const name = "Dave";
//     name = "Joe";
//   } catch (e) {
//     console.error(e.message); //can use .error, .warn, table
//     //can access properties e.name, e.message , e.stack which is the same as error(contains all)
//     // logTheError(err.stack); //function that sends the error to the error log
//   }
// };
// makeError();

//MAKE A CUSTOM ERROR FUNCTION
// const makeError = () => {
//   try {
//     throw new customError("This is a custom error!");
//   } catch (err) {
//     console.error(err.name);
//     console.error(err.message);
//     console.error(err.stack);
//   }
// };
// makeError();
// function customError(message) {
//   this.message = message;
//   this.name = 'customError"';
//   this.stack = `${this.name} : ${this.message}`;
// }

//GENERIC ERROR CONSTRUCTOR  "Error"
const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      throw new Error("This is an error!");
    } catch (err) {
      console.error(err.name);
      console.error(err.message);
      console.error(err.stack);
    } finally {
      console.log("...finally");
      i++;
    }
  }
};

makeError();
