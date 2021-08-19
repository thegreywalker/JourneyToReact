// We have alredy seen classes in JavaScript but now we will learn about mordern JavaScript Syntax for doing the Same we have done Just Now ...

// We know that "Properties" are like "variables" attached to Classes/Objects ... 

// "Methods" are like "functions" attached to Classes/Objects


// Now we have seen ES6 syntax of declearing Constructor in the Previous File ... Let's see a more mordern Way of doing the Same ...

// ES6 Way ~

class DemoClass{
    constructor(){
        this.name = "Robert Downey Jr."
    }
}

// ES7+ Way ~

class DemoClass2{
    name = "Robert Downey Jr."
}


// Similarily, we have seen Old ES6 way of Defining Methods in general as well as in a function ... Let's see a more mordern Way of Doing the Same ...

// ES6 Way

class heyGuys{

    namedfunction(){
        console.log("This is a Named function")
    }
}

// ES7+ Way

class heyGuysOnceMore{
    name = 'Apurba'
    namedfunction = () => {
        console.log(this.name)
    }
}

// We adopt this kind of Method Writing as we Store an Arrow function in a Variable as a Property in JavaScript ... There is one more benifit to this ... Arrow function makes it easier to refer to the 'this' ~ window object ...

// But do remember the kind of Syntax we used here are Next Generation JavaScript Syntax and is not accepted by Many Mordern Browsers ...








