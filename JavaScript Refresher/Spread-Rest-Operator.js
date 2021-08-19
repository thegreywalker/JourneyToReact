// The spread/Rest Operator looks like this --> ... , Yes you thought right it's three dots ...

// Now, to call it Spread or Rest it depends on the way we use it ...


// Spread --> Used to Split Up Array elements or Object Properties ... Eg:

const newArray = [...oldArray, 1, 2, 3]
const newObj = {...oldObject, newProp: 5}

// Note let's say the Old Object also had a Property like 'newProp' then it would have been Over Written by the One in the NewObj

// More Examples
const Person = {
    name: "Chris Evans"
}
const newPerson = {
    ...Person,
    age: 28
}
console.log(newPerson)


// Rest --> Used to Merge a list of function arguments into an Array


function sortArgs(...args){ // Here the Argument Args could be unlimited everything we pass as an Argument will be merged and formed into an Array using the Rest Operator ...
    return args.sort()
}

console.log(sortArgs(4, 8, 9, 12, 74, 23, 32, 34, 77, 95, 101, 100, 22, 199, 200)); // Add as many Arguments as you want ... The Spread Operator will merge it into an Array form.

// More Examples

const filter = (...args ) => {
    return args.filter(e => e === 1); //Here we are passing an inline Arrow function to the filter Array Method which check if the Value of the Element in the Array is equal to 1 or not ... "===" checks if the type or Value is equal or not ...
}

console.log(filter(1, 2, 7, 1));


