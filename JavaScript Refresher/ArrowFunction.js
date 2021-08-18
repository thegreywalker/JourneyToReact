// In JavaScript we have many function but mainly we will learn about "function" and Arrow function 

// function Syntax 

function myname(names) {
    console.log(names);
}
myname("Apurba");

// You can also Store this function in Object as well like in Variables

let myVar = function hello(args) {
    console.log(`Hey ${args}`);
}
// Or
const myfunc = function hey(args) {
    console.log(`Hey ${args}`);
}

// Arrow function Syntax
let myVar = (args) => {
    console.log(`Hey ${args}`);
}

// Or

const myfunc = (args) => {
    console.log(`Hey ${args}`);
}

// Arrow function was created to solve the Problem of n`this` Keyword .. It Becomes important when you assign the function to Objects like"Variables". `this` Keyword in JavaScript refers to the window Object 

// Let's see a Arrow function rerturn something
const multiply = number => number * 2;
console.log(multiply(4))
