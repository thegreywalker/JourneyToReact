// In JavaScript there are two kinds of exports; 

// 1. Default Export, 2. Named Export --> 


//Default Export:
//It happens when we export something from a *.js file using a 'default' Keyword ...Eg:

const name = {
    myName: 'Apurba'
}
export default name; // This Exports Something Out of a file by Default

//Named Export:
//It happens when we Explicitely does not export something out of a *.js file ...Eg:

const hello = {
    brand: "Hewlett-Packard",
    price: 30000
}
export const hello; // This Just exports the Variable/ Object but does not do the same by Default ...


// Now to import a Default Export in file we have a Syntax something like this ..

import name from './Exports-Imports.js'; //or
import nm from './Exports-Imports.js'; // Exports By Default does not restrict you to the named reference with which it has been Exported ... You could also write your own Alias 

// Now to import a Named Export in file we have a Syntax something like this ...

import { hello } from './Exports-Imports.js';

// You have to Provide the exact name of the named Export which is referenced in it's Original file ... and also put it in a pair of Curly Braces ...

// Now if you want to use Aliases in a Named Export then you can do so by this Syntax ...

import { hello as hl } from './Exports-Imports.js';


// Now, let's say you have many Named Exports in a file, in that's case rather than exporting each Named Export one by one you can Certainly do it in a much better way using this Syntax ...

import * as myObj from './Exports-Imports.js';

// The alias "myObj" here is referred as an JavaScript Object which exposes each & every constants & other contents in the file it is reffered as a Property ... 

// So, let's assume we have a constant in the file named 'hello' so when we import using the * charecter and use the alias 'myObj' then in the imported file we will use it as myObj.hello, where 'hello' is a JavaScript Property ... 










