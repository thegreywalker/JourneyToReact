// Destructuring could be misjudged with Spread Operator ... But Spread Operator adds all Elements of the Old Array or Objects into a new Array or a Object,

// Whereas Destructuring allows you to add single Elements of Old Array and Objects into a new One ... 

// Let's See Destructuring in Action

// Array Destructuring 

[a, b] = ["Chris Evans", "Robert Downey Jr."]

// Here we are adding each element of the Right Side Array to Respective elements of the left Array
console.log(a,b)

// Another Way
const numbers = [1, 21, 3];
[a, ,b] = numbers;
console.log(a, b);

// Object Destructuring 

({names} = {names: "Chris Evans", age: 28}); 
console.log(names) // Chris Evans
// console.log(age) //Undefined


