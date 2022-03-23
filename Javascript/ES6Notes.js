    //ES6 NOTES
    //BY: Recio, Angelo Rafael

    //VARIABLES
var a = 10; //defines a variable globally 
const b = 'Hello I\'m a String'; //immutable
let c = true; //var but is limited in scope to the black,statement or expression
    //template literals (depreciated?)
let name = 'Angelo';
let greet = `Hi! I\'m ${name}` //uses backtick instead of single/double quotes
console.log(greet)

    //FUNCTIONS
    // we can declare a fixed value inside parameters
function add3Numbers(d,e,f = 3){
    return d + e + f
}
console.log(add3Numbers(1,2));
    //NEW Syntax for functions in ES6
const add2numbers = (x,y) => {
    let z = x + y;
    console.log(z);
}   
add2numbers(1,2);
    //New syntax makes simple functions readable in a few lines only
const salutation = x => "Welcome " + x; //you can also declare the values of parameters at the function
console.log(salutation("Angelo")) //calling anf outputting single-line function
    //new Syntax makes it easy to use in inline function. Ex: use the function in each element of an array.
var arr = [2,3,7,8];
//arr.forEach(function(el){console.log(el*2);}); //for each element a function is used in it
//arr.forEach(v => {console.log(v*2);}); //new syntax


    //LOOPS
    //for loop - for iterating over values of a list
let arr = [1,2,3];
for (let k = 0; k < arr.length; k++) {
    console.log(arr[k]);
}
    //for...in loop - used in iterating keys in a key:value pair dict of an object
let obj = {a:1, b:2, c:3};
for (let k in obj){
    console.log(k);
}
    //for...of loop - creates a loop iterating over iterable objects. can loop strings
const dict = {a: 1, b: 2, c: 3};
for (const [key,value] of Object.entries(dict)){
    console.log(key, value);
}
    