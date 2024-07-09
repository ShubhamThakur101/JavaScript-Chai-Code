//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = true;
const outSideTemp = null;

let userEmail;

const Id = Symbol("123");
const anotherId = Symbol("123");

console.log(Id == anotherId);

console.log(typeof anotherId);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["sktiman", "nagaraj", "doga"];

console.log(heros)
console.log(typeof heros)

const myObj = {
  name: "shubham",
  age: 21,
  gender: "male",
};

console.log(myObj);
console.log(typeof myObj);

const myFunction = function(){
    console.log("hello World!")
}

myFunction();
console.log(typeof myFunction)
