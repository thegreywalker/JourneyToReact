// Primitives

let age: number; // < type number added to var age>

let userName: string; // <The type name must start with small letter, as capital will point at JavaScript Object and not the Primitive Type we want.> 
userName = 'Apurba';

let isInstructor: boolean;
isInstructor = true;


let hobbiess: null;

// More Complex Types 

    // Arrays

    let hobbies: string[]; // < This let's the Array only have String Elements >
    hobbies = ['Apurba', 'Plays', 'Cricket']

    let myHobbies: boolean[]; // < Assigns the Array elements type to Boolean >

    let array: any[]; // < Suggests that you can store any type of Element in the Array >


    // Objects
    let person: {
        name: string;
        age: number;
    };

    // person = {
    //     name: 'Apurba',
    //     age: '32' // Will give an Error
    // }

    let people: {
        name: string;
        age: number;
    }[]; // It Says that I don't want to Store One Single Objects but an Array of Objects with the properties mentioned.

// Type Inference
;

let course = 'React - The Complete Guide'
// course  = 123456 // It will gove Error, although you have not set Any Type to course Variable but TypeScript uses Type Inference and binda the typeof the Course Variable to the type of the Element assigned to it. Hence, now it won't allow you to enter any other type of Elements other that the type of the first Elements.

// Using Union Types

let id: string | number = 'React - The Complete Guide';
id = 12345 // This lets you add more than One Type to a Variable

// Type Aliases

type Person = {
    name: string;
    age: number;
    Instructor: boolean;
}

let candidate: Person = {
    name: 'Apurba',
    age: 18,
    Instructor: true
} // Here you have implemented Your mentioned Type and binded it to a Variable. It let's you make your Own Types

// Functions & Types

function add(a: number, b: number):string {
    return a+b.toString();
} // it let's you annotate the type of the Return Value as well


function prints(value: any): void {
    console.log(value);
} // It's a Special Type Which Says that the Function doesn't return anything. It just executes the task Mentioned 


// Generics

function insertAtBeginning(array: any[], value: any): any[]{
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);

// Now thhe Problem is that here the function is accepting any value which makes no pointof using TypeScript at first hand, as we can see for that thing the updatedArray, has been inffered the any type. Now, we want to accept any type of Parameters as a list but also does not want to bind it to any type. Rather we can use the Generics Feture given by TypeScript

function insertAtEnding<T>(array: T[], value: T): T[]{
    const newArray = [value, ...array];
    return newArray;
}

const demoArray2 = [1, 2, 3];
const updatedArray2 = insertAtEnding(demoArray2, -1);

// updatedrray2[0].split('') // The Generics feature hence, allows you to bind the type of the Array to the type of the Values you are Passing, hence for every value you send of any type the Array accepts that but also, now TypeScript knows that that particular number is of what type and suggests any error if any wrong operation is performed on that like here in this line.





















    