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
const add = number => {
    return number + 5;
}
console.log(add(7)) // Calling and printing the Value at the Same time 

// Now there is a more Shorter Syntax of doing the same return. Let's See it.

const multiply = number => number * 2;
console.log(multiply(4)) // This Works when we have only One Operation in the return Statement ...


