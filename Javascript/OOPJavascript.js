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
    age:21
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
var goldfish = new fish("lenny","orange",25);
console.log(goldfish.twicer());
