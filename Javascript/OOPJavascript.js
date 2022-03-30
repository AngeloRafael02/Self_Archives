    //Object Oriented Programming JAVASCRIPT NOTES
    //BY: Recio, Angelo Rafael

    
    //OBJECTS: a list of values written as key:value pairs
var me = {
    name : "Angelo",
    age : 20,
    dumb : true
}
        //accessing object properties:
var call = me.name;
        //or
var call2 = me['name'];
    //console.log(call); //prints Angelo
    //console.log(call2) //prints Angelo
    
    //Object Initialization
    //CONSTRUCTOR: written function used to crate new objects
function person(name,age,color){
    this.name = name;
    this.age = age;
    this.color = color;
}

var p1 = new person("Angelo", 20, "gray"); //new objects
var p2 = new person("Lianna", 21, "pink");
console.log(p1.age); //prints p1's age
console.log(p2.name); //prints p2's name\


    //Object Initialization: use the object literal or initializer syntax to create single objects
var John = {name: "John", age:25}
var James = { //line breaks and indents don't matter
    name:"James",
    age:21,
    altname:function(){ //functions can be made inside objects
        return this.name + this.age;
    }
}   //accessing Object properties:
console.log(John.age)


    //METHODS: you can also define a funciton outside a constructor and associate it with an object
function fish(name, color,number){
    this.name = name;
    this.color = color;
    this.number = number;
    this.twicer = twicer; //twicer function is called  to be used
    
}
function twicer(){
    return this.number * 2;
}
var goldfish = new fish("lenny","orange",25); //new object
console.log(goldfish.twicer()); //called a method within the object


    //ARRAYS: stores multiple values in a single variable
    //Useful in scaling values
var courses = new Array ("Python","C#","Javascript","SQL"); //<= array literal syntax
//console.log(courses[1]); //Access an item in an array with its index via square brackets
var framework = new Array(3); //<= Alternative Syntax
    framework[0] = 'ReactJS';
    framework[1] = 'Angular';
    framework[2] = 'VueJS';


    //Array Properties & Methods
console.log(courses.length); // .length - returns the number of elements
var toLearn = courses.concat(framework); // .concat - concatenates arrays
//console.log(toLearn[5]); //prints the 5 element of the joined array


    //Associative Arrays: arrays with named indexes
    //not built-in in Javascript but can be done
var profile = []; //profile is now treated as an object instead of array
profile["name"] = "Lianna";
profile["age"] = 21;
//console.log(profile["age"]); // prints 21
    //NOTE: Objects are better then associative arrays


    // CLASSES: used to create multiple objects with the same structure
    //Classes can be assigned as variables, i.e. var dog = class mammal{}
    //classes assigned as variables with no class name will get its variable name as its class name.
class Rectangle{
    constructor(height, length){ //constructor, used in creating and initializing a object created with the class
        this.height = height;
        this.length = length;
    }
    perimeter(){return (this.height*2)+(this.length*2)};
    //prototype method: available to the objects in the class
    getHeight(){ return this.height; };
    getLength2x(){ return this.length * 2; };
    //static functions: cannot be called through class instances, created for utility funciton
    static ownFunc(a,b){
        return a + b;
    }
}
const square = new Rectangle(5,5);
const poster = new Rectangle(2,3);
//console.log(poster.perimeter()); //prints 20
//console.log(poster.length); //prints length
//console.log(poster.getLength2x()); // prints 6
//console.log(Rectangle.ownFunc(2,2)); //prints 4, did not touch the constructor whatsoever

    //INHERITANCE: use "extends " word to inherit a class's constructor
class Parallelogram extends Rectangle{ //no need for constructor
    getHeight2x(){
        return super.getHeight() * 2; //parents methods is called using the speak method
    }
    area(){
        return this.height * this.length;
    }
}
let rect = new Parallelogram(4,7); //calls the parallelogram class that uses the Rectangle class
console.log(rect.area());
console.log(rect.getHeight2x()); //calls a method that calls from the parent's method.

  
    
