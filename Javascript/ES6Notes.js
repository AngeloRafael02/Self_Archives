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
var array = [2,3,7,8];
//array.forEach(function(el){console.log(el*2);}); //for each element a function is used in it
//array.forEach(v => {console.log(v*2);}); //new syntax


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

    //ES6 Objects - Variables can be object data types that contain many properties
    //they can also have functions as properties called "methods"
let knight = {
    ATK: 100,
    DEF: 50,
    SPD: 50,
    AtkBoost(){ //methods: functions inside  objects
        this.ATK += 20;
    }
};
knight.AtkBoost(); //called the method to work
//console.log(knight.ATK); //prints 120
    //you can also value shorthand when initializing properties using the variable with the same name
let color = "green";
let habitat = "Tropical";
let NarraTree = {
    color, //from variable outside the block
    habitat //from variable outside the block
}
//console.log(NarraTree.habitat); //prints tropical
    //when an object has multiple duplicate property names, the last value/property will override the others and will be printed
let re = {x:1,x:2,x:3,x:4}
//console.log(re.x)

    //computer property names: uses [] notation
let title = 'name';
let id = 1234;
let status = "single";
let user = {
    [title]:'Dave', // ([title] = name):'Dave'
    [`user${id}`]: `${status}` // ([`user${id}`]=user1234) : (`${status}`=456)
};
console.log(user.name) //prints Dave
console.log(user.user1234) //prints single
    //Object.assign() - makes allow to uses multiple sources into one target to create a new object
let person = {
    name:"Jack",
    age:20 ,
    sex:'Male'
};
let personality = {
    favMusic : "HipHop",
    favMovie : "LOTR",
    hobby : "Bike"
};
let newStudent = Object.assign({}, person, personality); // gets from person and personality objects to form a new object
//console.log(newStudent.age) //prints 20
//console.log(newStudent.favMovie) //prints LOTR
    // We use assign() to create a duplicate object without referencing to the bas object
let guy = {
    name : "Jack",
    age : 18
};
let newGuy = Object.assign({},guy)
newGuy.name = "Bob";
console.log(guy.name); //prints Jack
console.log(newGuy.name); //prints Bob
    //You can also assign the value of an object property in the Object.assign() statement
let newGuy2 = Object.assign({},guy, {name:"kyle"});
console.log(newGuy2.name);