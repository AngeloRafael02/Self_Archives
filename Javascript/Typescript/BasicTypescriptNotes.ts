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
    id:string,
    age:number,// mandatory by default
    email?:string, //< (?)after name means that it is optional
    message?():string
}
const student1:StudentInterface = { //instead of declaring each properties types, references an interface instead.
    id:"Charles",
    age: 20 ,
    email:"something@gmail.com",
    message(){
        return "Hello, " + this.id;
    }
}
const student2:StudentInterface = {
   id:"Neale",
    age: 20 //email is declares as an optional property, therefor it can be not declared in an object
}
console.log(user.age);
console.log(student1.message());


    //UNION used for declaring multiple data types
let pageName: string | number  = "one"; 
    //can be useful in null checking
let errorMessage: string | null = null;

interface AnimalInterface {
    name:string,
    population: string | number
}
let newAnimal: AnimalInterface | null = null;


    //Type Aliases: for naming certain data types
type ID = number 
type username = String | number
type numbers = Array<ID>
type PopularTag = string
type MaybePopularTag = string | null

interface SocMed {
    id: ID,
    name: username
}
const popularTags:PopularTag[] = ['Dragon', "Coffee"];
const dragonsTag: MaybePopularTag = null;


    // VOID IN TYPESCRIPT
    // Mostly used in function that don't have a return value.
const doSomething = ():void => { // when we don't have return it is a void, can be changed when we actually return something in a functions
    console.log("doSomething");
}

    //ANY IN TYPESCRIPT
    // worst type in typescript
let any: any = "foo" //used to opt out typescript checks


    //NEVER IN TYPESCRIPT
    //Function with never can't be executed to the end
const NeverLand = ():never => {
    throw "never"
}


    //UNKNOWN IN TYPESCRIPT
let vAny:any = 10;
let vUnknown:unknown = 10;

let s1:string = vAny;
//let s2:string = vUnknown; //Error: We can't assign unknown directly in other type
    //If we were to change the type we must use TYPE ASSERTIONS
let s2:string = vUnknown as string; //converts any type to another
    //ANOTHER EXAMPLE
let pageNumber: string = "10";
    // to change one type to another, changes it to unknown first then to desired type
let numericPageNumber: number = (pageName as unknown) as number;