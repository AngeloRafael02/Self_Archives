//Basic Typescript Notes
//By: Angelo Rafael Recio
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//NOTE: typescript compiler needed to be installed in system.
//Note: tsc BasicTypeScriptNotes.ts -w :to automatically transpile Typescript to javascript
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
    id: "Charles",
    age: 20,
    email: "something@gmail.com",
    message: function () {
        return "Hello, " + this.id;
    }
};
var student2 = {
    id: "Neale",
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
// VOID IN TYPESCRIPT
// Mostly used in function that don't have a return value.
var doSomething = function () {
    console.log("doSomething");
};
//ANY IN TYPESCRIPT
// worst type in typescript
var any = "foo"; //used to opt out typescript checks
//NEVER IN TYPESCRIPT
//Function with never can't be executed to the end
var NeverLand = function () {
    throw "never";
};
//UNKNOWN IN TYPESCRIPT
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
//let s2:string = vUnknown; //Error: We can't assign unknown directly in other type
//If we were to change the type we must use TYPE ASSERTIONS
var s2 = vUnknown; //converts any type to another
//ANOTHER EXAMPLE
var pageNumber = "10";
// to change one type to another, changes it to unknown first then to desired type
var numericPageNumber = pageName;
var User = /** @class */ (function () {
    //^static is only accessible with the actual class (User) itself
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.immutableString = firstName;
    }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    //^ readonly can be used to make constants inside classes
    User.maxAge = 50;
    return User;
}());
var user1 = new User("Angelo", "Recio");
console.log(user1.getFullName());
console.log(User.maxAge);
//INHERITANCE
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var admin = new Admin('Sir', "TwinkleBerry"); //already works because of the constructor inherited from User class
console.log(admin.immutableString);
var editor1 = admin.setEditor("Johnson");
//TYPESCRIPT WORKING IN A DOM
//const someElement = document.querySelector(".foo");
//someElement.addEventListener('blur',(event)=>{
//const target = event.target as HTMLInputElement
//console.log('event', target.value)
//})
