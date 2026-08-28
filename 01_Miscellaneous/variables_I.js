//node REPL

//Type coercion

// Rule: Use strict equality checks: === or !==

//node <filename>

//Rule: Use const whenever possible, otherwise use let

console.log("Adam");

const myFavoriteNumber = 12;

//const means that it is constant in the assignment

const person = {
    // key-value pair
    name: "Morten"
};

person.age = 21;

console.log(person);

console.log(person);

const things = ["mouse"];

things.push("car");

// things.pop();


//Rule: Use comma in console.log 
//because if we use + (concatenate) we might coerce and change the value
console.log(things);

console.log(things[0]);

console.log(things[0], things [1])

// Data types in JavaScript
// Strings, Boolean, Number, BigInt, null, undefined, Object, Symbol

const greetingOne = "Welcome to your 'introduction' to node.js"
const greetingTwo = 'Welcome to your "introduction" to node.js'
const greetingThree = `Welcome to 'your' "${person.name}" to node.js`



console.log (greetingOne)
console.log (greetingTwo)
console.log (greetingThree)

