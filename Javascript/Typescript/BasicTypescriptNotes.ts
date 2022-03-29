    //Basic Typescript Notes
    //By: Angelo Rafael Recio

    //Note: tsc BasicTypescriptNotes.ts -w :to automatically transpile Typescript to javascript

    //VARIABLES
const isSingle:boolean = true //const: immutable variables
var number:number = 68;
let message: string = 'Hello Typescript';
console.log(message);

    //FUNCTIONS
const getFullName = (name:string,surname:string) => { //parameters should also have their types
    return name + ' ' + surname;
}
getFullName("Angelo","Recio");