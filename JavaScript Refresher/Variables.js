// This file conatins Summery of when should you us "let" & when should you use "const"

// You can decleare a Variable using "let" ~
// Use let if you want to Create something which is a Variable

let a = 5;
let names = "Apurba";
let value = true;
let float = 2.4;

// Const is used when you want to create a Variable which will never Really geta new value ever 

// Variable using "const" ~
const b = 5;
const named = "Apurba";
const values = false;
const floats = 4.98;

// Seems like both are same right? But here is the Trick

let myname = "Apurba"; //This is Possible
myname = "Robert Downey Jr."; // This is also Possible 
console.log(myname) 

const MyName = "Apurba"; // This is Possible
MyName = "Chris Evans"; // This  is not Possible as we have referenced MyName with "const" Keyword
console.log(MyName)