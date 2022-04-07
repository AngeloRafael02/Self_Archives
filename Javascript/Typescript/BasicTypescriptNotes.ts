    //Basic Typescript Notes
    //By: Angelo Rafael Recio

    //NOTE: typescript compiler needed to be installed in system.
    //Note: tsc BasicTypeScriptNotes.ts -w :to automatically transpile Typescript to javascript


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



    //CLASSES IN TYPESCRIPT(sugar around prototypes)
    //public,private,protected keywords only work on typescript. removed one transpiled to JavaScript
interface UserInterface{
    getFullName():string;
}
class User implements UserInterface{
    protected firstName:string
    //^ protected means that it is only allowed inside class and its children via inheritance
    private lastName:string
    //^ private means that we can only use it inside the class (can't also be accessed by intellisense)
    readonly immutableString:string
    //^ readonly can be used to make constants inside classes
    static readonly maxAge = 50
    //^static is only accessible with the actual class (User) itself

    constructor(firstName:string, lastName:string){
        this.firstName = firstName
        this.lastName = lastName
        this.immutableString = firstName
    }

    getFullName():string{
        return this.firstName + " " + this.lastName
    }
}
const user1 = new User("Angelo","Recio");
console.log(user1.getFullName());
console.log(User.maxAge);
    //INHERITANCE
class Admin extends User { //we can override or make new methods in inherited classes
    private editor:string
    setEditor(editor:string):void{ //new constructor
        this.editor = editor
    }
    getEditor():string{ //new method
        return this.editor
    }
}
const admin = new Admin('Sir',"TwinkleBerry"); //already works because of the constructor inherited from User class
console.log(admin.immutableString);
const editor1 = admin.setEditor("Johnson");


    //GENERICS IN INTERFACES AND FUNCTIONS IN TYPESCRIPT
    //generic data types  are written inside <>, T is default name
    //better than any because we can "assign" what types will be used. Generics allow us to provide different data types (woks on functional programming)
const addID = <T extends object>(obj:T) =>  {
    const id = Math.random().toString(16); //<- fastest way to make random id
    return {
        ...obj,
        id
    }
}
    // we can an Interface to make generics
interface genericInterface<T, V> {
    name:string;
    data:T; //generics which mean that "any" types can be used as long as it is declared in the object
    meta:V;
}
const user3:genericInterface<{ meta:string }, string> = {
    name: "Jack",
    data: {meta: "foo"},
    meta: "bar"
}
const user4:genericInterface<string[],number>={
    name:'John',
    data: ['foo','bar','baz'],
    meta:69

}
const result = addID(user3);
console.log(result);

    //ENUMS in TYPESCRIPT; enumerables
const statuses ={ //<- not using enumerables
    notStarted:0,
    inProgress:1,
    done:2
}
enum status2Enum {
    NotStarted, //automatically has an index,0
    AboutToStart,//1
    InProgress = 'In Progress', //thigh we can assign their own index with strings
    Done = 'Done' //2
}
let shouldReturn1:status2Enum = status2Enum.Done //<- enum being called as a data type
console.log(shouldReturn1);
shouldReturn1 = status2Enum.NotStarted;
console.log(shouldReturn1);
console.log(status2Enum.InProgress); //<- enum being called as an object
    //enums can be used as value and a data type
        //enums can also be used in interfaces to provide what can only be its data
interface Task {
    id:string;
    status:status2Enum; //<- called to make status only have enums values
}


    //TYPESCRIPT WORKING IN A DOM
//const someElement = document.querySelector(".foo");
//someElement.addEventListener('blur',(event)=>{
    //const target = event.target as HTMLInputElement
    //console.log('event', target.value)
//})