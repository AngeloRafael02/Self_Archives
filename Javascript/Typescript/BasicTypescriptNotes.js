//Basic Typescript Notes
//By: Angelo Rafael Recio
//NOTE: typescript compiler needed to be installed in system.
//Note: tsc BasicTypescriptNotes.ts -w :to automatically transpile Typescript to javascript
//VARIABLES
var isSingle = true; //const: immutable variables
var number = 68; // var is not recommended to be used
var message = 'Hello Typescript';
console.log(message);
//NOTE: Define everything possible
//FUNCTIONS
var getFullName = function (name, surname) {
    return name + ' ' + surname; //^declare the return value a string
};
console.log(getFullName("Angelo", "Recio"));
//CREATING OBJECTS
//You can declare type for each object properties
var user = {
    name: 'Angelo',
    age: 20
};
var user2 = {
    name: "Jack",
    age: 31
};
var student1 = {
    name: "Charles",
    age: 20,
    email: "something@gmail.com",
    message: function () {
        return "Hello, " + name;
    }
};
var student2 = {
    name: "Neale",
    age: 20 //email is declares as an optional property, therefor it can be not declared in an object
};
console.log(user.age);
console.log(student1.message());
//UNION used for declaring multiple data types
var pageName = "one";
//can be useful in null checking
var errorMessage = null;
var newAnimal = null;
var popularTags = ['Dragon', "Coffee"];
var dragonsTag = null;
