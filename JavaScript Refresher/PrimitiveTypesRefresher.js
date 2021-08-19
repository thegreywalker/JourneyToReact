// Memory Contraints could be quite Consusing while learning a New language ... Let's understand few or One of those in this One 

// while Assigning an Array or an Object using it's named reference to a new One we actually Copy the Pointer referenced to the Old Object/Array ... If the copied Array or Object Changes then the Actual Array/Object also Changes ... Let's see the Code to see and Understand Better ...

// Array Assignment

const FirstArray = [1, 2, 3, 7];

copiedSecondArray = FirstArray;
copiedSecondArray[1] = 4;

console.log(FirstArray); // It will have it's Second Element Changed to 4
console.log(copiedSecondArray); // It will also have it's Second Element Changed to 4

// Object Assignment 

const object = {name: "Chris Evans", Movie: "Captain America"};

const newObjectCopied = object;
newObjectCopied.name = "Robert Downey Jr.";
newObjectCopied.Movie = "Iron Man 4";

console.log(object, newObjectCopied); // Both will Provide the new Value assigned ...

// So, actually copying is not done we are just Copying the Pointer of the Old Object which is giving you a reference to the memory address to the Object Stored ...


// To Copy Objects actually we can use Something we have seen earlier called the Spread Operator 

// Let's see the Code in Action
const myArray = [1, 5, 7, 88];

const CopiedArray = [...myArray];

CopiedArray[2] = 45;

console.log(myArray, CopiedArray); // This actually changes the Third Element of the CopiedArray but the myArray remains Same 

// Similarily for Object Copying ...

const myObject = {name: "Chris Evans", Movie: "Captain America the Winter Soldier "};

const CopiedObject = {
    ...myObject
};

CopiedObject.name = "Robert Downwy Jr.";
CopiedObject.Movie = "Iron Man 4";

console.log(myObject, CopiedObject); // This will Override the Details in the copiedObject Object but the myObject Object remains Same & intact ...



