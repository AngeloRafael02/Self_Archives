    //ES6 NOTES
    //BY: Recio, Angelo Rafael

    //VARIABLES
var a = 10; //defines a variable globally 
const b = 'Hello I\'m a String'; //immutable
let c = true; //var but is limited in scope to the black,statement or expression
    //template literals (depreciated?)
let name = 'Angelo';
let greet = `Hi! I\'m ${name}` //uses backtick instead of single/double quotes
//console.log(greet)

    //FUNCTIONS
    // we can declare a fixed value inside parameters
function add3Numbers(d,e,f = 3){
    return d + e + f
}
//console.log(add3Numbers(1,2));
    //NEW Syntax for functions in ES6
const add2numbers = (x,y) => {
    let z = x + y;
    console.log(z);
}   
//add2numbers(1,2);
    //New syntax makes simple functions readable in a few lines only
const salutation = x => "Welcome " + x; //you can also declare the values of parameters at the function
//console.log(salutation("Angelo")) //calling anf outputting single-line function
    //new Syntax makes it easy to use in inline function. Ex: use the function in each element of an array.
var array = [2,3,7,8];
//array.forEach(function(el){console.log(el*2);}); //for each element a function is used in it
//array.forEach(v => {console.log(v*2);}); //new syntax


    //LOOPS
    //for loop - for iterating over values of a list
let arr = [1,2,3];
for (let k = 0; k < arr.length; k++) {
    //console.log(arr[k]);
}
    //for...in loop - used in iterating keys in a key:value pair dict of an object
let obj = {a:1, b:2, c:3};
for (let k in obj){
    //console.log(k);
}
    //for...of loop - creates a loop iterating over iterable objects. can loop strings
const dict = {a: 1, b: 2, c: 3};
for (const [key,value] of Object.entries(dict)){
    //console.log(key, value);
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
//console.log(user.name) //prints Dave
//console.log(user.user1234) //prints single
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
//console.log(guy.name); //prints Jack
//console.log(newGuy.name); //prints Bob
    //You can also assign the value of an object property in the Object.assign() statement
let newGuy2 = Object.assign({},guy, {name:"kyle"});
//console.log(newGuy2.name);

    //ARRAY DESTRUCTURING IN ES6
let array2 = ['1','2','3'];
let [one, two, three] = array2 //declaring each item its variable names respectively
//console.log(one); //calling the variable assign on a deconstructed array
    //we can also deconstruct from returns of a function:
let d = () =>{
    return [1,2,3] ;
}
let [uno, dos, tres] = d(); //declared variable names for the return values of the function d() respectively
//console.log(uno); //prints 1
    //we can slo assign or swap values with destructuring objects
let e,f,g=4, h=8;
[e,f=6] = [2]; // a=2, b=6, 2 was assign to the empty variable
//console.log(e); //prints 2
//console.log(f);  //prints 6
[g,h] = [h,g];  // g=8, h=4, the values were swapped
//console.log(g); // prints 8
//console.log(h); //prints 4

    //OBJECT DESTRUCTURING
let object = {
    r:100,
    s:true
} 
let {r, s} = object; //re-declares keys from key:value pairs as variable names
//console.log(r); //prints 100
//console.log(s); // prints true

    //we can assign without declaration but we'll need some syntax for that
let j,k; 
({j,k} = {j:'Hello ', k:'Angelo'});
//console.log(j + k);

    //we can also assign an object to new variable names
var l ={m:42, n:true};
var {m:foo, n:bar} = l; //assigned foo to have save value as "m"
//console.log(foo) //prints foo that has the value of "m"(42)

    //you can also assign default values to variable, in case the value unpacked from the object is undefined
var obj1 = {no:68, name:"jack"};
let {no=36, age=21} = obj1;
//console.log(no); //prints 68 
//console.log(age); //prints 21

    //REST PARAMETER: used when you need to pass many arguments in a funciton
    //syntax: function funciton name(...argument){}
function containsAll(arr, ...nums){
    for (let num of nums){
        if (arr.indexOf(num) === -1){
            return false;
        }
    }
    return true;
}
let x = [2,4,6,8,0];
console.log(containsAll(x,2,4,6)); //prints True
console.log(containsAll(x,6,4,9)); //prints

    //SPREAD OPERATOR : used to pass the elements of an array as arguments in a function
function add4numbers(w,x,y,z){
    console.log(w+x+y+z);
}
var list = [1,2,3];
//add4numbers(...list,4);

    //ES6 MAP: used to hold key:value pairs.
let map = new Map([['key1','value1'],['key2','value2']]);
console.log(map.size); //prints 2 because there is 2 key:value pairs
    // the keys can be any type, including functions, objects, and any primitive
    // You can get the size of the map (console.log(map.size); )
    // you can directly iterate from ma Map (loops)
    // Performance  of the Map is better in scenarios involving frequent addition and removal of key:value Pairs

    // MAP Methods:
let map1 = new Map();
map1.set('key1','value1').set('key2','value2'); // set(key,value) - add a specific kay:value pair to the Map
console.log(map1.get('key1')); // get(key) - returns the value corresponding on the given key, undefined if not found
console.log(map1.has('key2')); // has(key) - returns true if the key:value pair is found, otherwise false
    // delete(key) - deletes a key;value pair according to the key given
    // clear() - removes all key;value pairs off the Map   
    // keys() - returns an iterator of keys in the Map for each element
    // values() - returns an iterator of values in the Map for each element
    // entries() - returns an iterator of array in th Map of each element
for (let kv of map.entries())
    console.log( kv[0] + ":" + kv[1]); //iterates both key and value, key first and then value

    //ES6 SETS: used to hold unique values (no repetitions are allowed)
    // duplicates will be counted as 1 value 
let set = new Set ([1,2,4,2,59,9,4,9,1]);
console.log(set.size); //prints 5 (unique values)
        //some Sets Methods
    // add(value) - adds value in a Set 
    // has(value) - returns true if the value is found, otherwise false
    // delete(value) - deletes a value from the Set
    // clear() - removes all value off the Map
    // values() - returns an iterator of values in the Set for each element


    //ITERATORS
    //[Symbol.iterator] is the default iterator for an object.
    //for..of loops are based on this type of iterator ( manual for...of )
myNumbers = {}; //1) create an object
myNumbers[Symbol.iterator] = function() { //2) Make it Iterable
    let n = 0;
    done = false;
    return {
        next() {
            n += 1;
            if (n == 5) {done = true}
            return {value:n, done:done};
        }
    };
}
let iterator = myNumbers[Symbol.iterator](); //3) Create an Iterator
let text = "" //start of the loop
while(true){
    const result = iterator.next();
    if (result.done) break;
    text += result.value + ", "
}
console.log(text);


    //GENERATORS
    //uses yield(instead of return) as to not mutate local variables
    // marked with an asterisk (*) after the function keyword
function* idMaker(){
    let index = 0;
    while (index < 3)
        yield index++;
}
var gen = idMaker();
console.log(gen.next().value); //prints 1
console.log(gen.next().value); //prints 2
console.log(gen.next().value); //prints 3
console.log(gen.next().value); //prints undefined

    
    //BUILT-IN METHODS
            //ARRAY ELEMENT FINDING
        //legacy way 
let res = [4,5,1,8,2,0].filter(function(x){ return x > 3; })[0];
console.log(res);
        //new syntax 
let res1 = [4,5,1,8,2,0].find(x => x > 3);
console.log(res1);
            //REPEATING STRINGS
        //legacy way
console.log(Array(3+1).join("foo"));
        //new Syntax
console.log("foo".repeat(3));
            //SEARCHING STRINGS
        //legacy way
console.log("Hello".indexOf("Hell")===0);
        //new syntax
console.log("Hello".startsWith("Hell",0));
            //other string search keywords: endsWth, includes


    //ES6 MODULES - NOTE: Modules only work with the HTTP(s) protocol.
    //Considerations:
        // maintainability - making improvements and expansions possible with minimal dependencies are good
        // nameSpacing - Modules can be made for a private space for variables to lessen nameSpace pollution
        // reusability - make the code reusable for for other projects
    //EXPORT
//export let sum = (x,y) =>{ return x + y;}
    //IMPORT
//import * as func from "BasicJavascriptNotes.js"
//let fromModule = func.sum(2,2);
//console.log(fromModule);


    //MATH OBJECT: allow to perform mathematical tasks
    //Math object has no constructor, no need to create a math object
    // E = Euler's constant
    // PI = returns the constant PI
    // LN2 = Natural log of the value 2
    // LN10 = NAtural Log of the value 10
    // LOG2E = Base 2 log og Euler's constant (E)
    // LOG10E = Base 10 log og Euler's constant (E)
//console.log(Math.PI); //prints 3.141592653589793
//console.log(Math.LN10);// prints 2.302585092994046
    //Math Object Methods
    //syntax:  var varname = Math.method(argument)
var number = Math.sin(30);
console.log(number); //prints -0.9880316240928618
        //abs(x) - Absolute value of x
        // acos(x) - arccosine of x, in radians
        // asin(x) - arcsine of x, in radians
        // atan(x) - arctangent of x, as an numeric value between -PI/2 and PI/2 radians
        // atan2(y,x) - arctangent of the quotient of its arguments
        // ceil(x) - returns x, rounded up to the nearest integer
        // floor(x) - returns x, rounded down to the nearest integer
        // log(x) - returns natural logarithm (base E) of x
        // cos(x) - cosine of x, in radians
        // sin(x) - sine of x, in radians
        // tan(x) - tangent of x, in radians
        // sqrt(x) - square root of x
        // round(x) - sound x to the nearest integer
        // pow(x,y) - returns the x to the power of y
        // min(x,...) - returns the lowest value
        // max(x,...) - returns the highest value
    