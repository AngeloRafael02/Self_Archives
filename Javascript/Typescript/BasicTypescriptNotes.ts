    //Basic Typescript Notes
    //By: Angelo Rafael Recio

    //NOTE: typescript compiler needed to be installed in system.
    //Note: tsc BasicTypescriptNotes.ts -w :to automatically transpile Typescript to javascript

    //VARIABLES
const isSingle:boolean = true //const: immutable variables
var number:number = 68; // var is not recommended to be used
let message: string = 'Hello Typescript';
console.log(message);

    //NOTE: Define everything possible

    //FUNCTIONS
const getFullName = (name:string,surname:string): string => { //parameters should also have their types
    return name + ' ' + surname;                   //^declare the return value a string
}
console.log(getFullName("Angelo","Recio"));

    //CREATING OBJECTS
    //You can declare type for each object properties
const user:{name:string, age:number} = {
    name:'Angelo',
    age:20
};
const user2:{name:string, age:number} = { //of an object lacks a property, the types wont be right, producing an error
    name :"Jack",
    age: 31
}
    //Use INTERFACE to easily declare the types of the Objects
    //Note: for readability's sake, put INterface after name to be differentiated to classes
interface StudentInterface { //Kind of like a constructor{}
    name:string,
    age:number,// mandatory by default
    email?:string, //< (?)after name means that it is optional
    message?():string
}
const student1:StudentInterface = { //instead of declaring each properties types, references an interface instead.
    name:"Charles",
    age: 20 ,
    email:"something@gmail.com",
    message(){
        return "Hello, " + name;
    }
}
const student2:StudentInterface = {
    name:"Neale",
    age: 20 //email is declares as an optional property, therefor it can be not declared in an object
}
console.log(user.age);
console.log(student1.message());