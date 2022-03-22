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
    