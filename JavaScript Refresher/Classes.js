// Classes are essentially blueprints of Objects in JavaScript ... where it is defined by usingg the keyword 'class' & it can contain essentially methods as well as properties.
// Methods are fucntions are Properties attached to Classes ...
// Whereas Propertoies are very well attached to Classes ... 


// Constructor is a default function which gets called every-time you instantiate a Class ...Eg:

class Person {
    constructor(){
        this.name = 'max' // We can declere properties using 'this' Keyword
    }
    printmyname(){
        console.log(this.name)
    }
}

const personobject = new Person(); // This is a Way of Creating Objects of a Class in JavaScript ...

personobject.printmyname();

// Now we have a concept of Inheritance in Classes ... Wherein we can use Properties of a Class into another Class which is inherting it ... Let's see it in Action

class Human{
    constructor(){
        this.gender = "male"
    }

    printgender(){
        console.log(this.gender)
    }
}

class Name extends Human{
    constructor() {
        super(); // Note You had to Call the Parent Class constructor using the super method as you have initialized an indivisual Constructor of this Class as well ... If you haden't then you would not have to use this Super Keyword ... 
        this.name = "Chris Evans"
    }

    printname() {
        console.log(this.name)
    }
}        

objectofname = new Name()
objectofname.printname() // This is a Property of the Class Name 
objectofname.printgender() // This is not a Property of the Class Name whereas it is just inherited from the Parent Class Human


