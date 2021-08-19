// Now Memory Constraints are one of the major concerns while you learn a language ... Let's Understand how one such Array Function works 

// Let's Say we have an Array of 3 elements & we want to double each element of the Array, we can do by using map method of an Array ... As map works on each element of the  Array one by one ... Let's see the Code in Action

const numbers = [1, 21, 35];

const doubleNumbersArray = numbers.map((arg) => {
    return arg * 2;
}); // Note that the map method will Create altogether a Different Array out of the Previous Array ... the Changes madew will be on a new Array whereas not on the Old Array ...

console.log(numbers) // Will Contain the Same Array as it has 
console.log(doubleNumbersArray); // Will Conatin the new Arry which map has returned by multiplying each elemenmt by 2




