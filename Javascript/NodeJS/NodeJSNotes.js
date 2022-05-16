    //NodeJs Notes
    //By: Angelo Rafael Recio

    // What is NodeJS?
    // NodeJS is a runtime environment using the v8 engine of google chrome to use javascript without using a browser

console.log('Hello World');

    //global - namespace to put when a variable is to be used throughout the file
console.log(global.luckyNum); //prints undefined
global.luckyNum = "68";
console.log(global.luckyNum); //prints 68

    //CONCEPTS TO UNDERSTAND
    //NORMAL FUNCTION STATEMENT:
function normal(){ console.log("I'm from a Normal function"); }
normal();
    //FUNCITON EXPRESSION:
var func = function(){ console.log("I'm from a function expression "); }
func()
    //Sample of a function taking another function
function callFunction( anotherFunction ){ anotherFunction(); }
callFunction(func)

    //MODULES AND REQUIRE()
    //used for "connecting" other modules or using third-party JS packages.
var module1 = require('./test')
console.log(module1(5))

    //process - access to the current running Node Process
console.log(process.platform);

    //NodeJS is non-blocking, which mean you can make as many request as you want
    // its the reason NodeJs is used in apps with high throughput like web servers


    //EventListening = use global namespace"process" and on() to listen to the event
            //V-EVENT
process.on('exit',function(){
                    //^-CALLBACK, calls this function when the event happens
console.log("Bye");
}); //this code always print "bye" before finishing a file
    // you can also make your own event  from scratch
const { EventEmitter } = require('events'); //require(): used to import modules in NodeJS
                                            //NOTE:Node also has support in ES Modules (import/Export)
const eventEmitter = new EventEmitter();
eventEmitter.on('called',() => { // custom event name is declares
    console.log("This text is not be called unless called by emit()")
})
eventEmitter.emit('called'); //event is called using its custom event called "called"
eventEmitter.emit('called'); //event is called twice
    //NOTE: making your code event driven can be very useful in CPU intensive apps

    
    //FILE SYSTEM: NodeJs has a file system module (fs) for reading, creating,updating and deleting files and its content
const { readFile, readFileSync} = require('fs') //If the function ends with a "sync", it is blocking
    //BLOCKING
const txt = readFileSync('Self_Archives/Javascript/NodeJS/test.txt', 'utf8');
console.log(txt);
console.log("do this ASAP!"); //called once the blocking event is finished
    //NON-BLOCKING
readFile('Self_Archives/Javascript/NodeJS/test.txt', 'utf8', (err,txt)=>{
    console.log(txt)
});
console.log("do this ASAP"); //In Non blocking Code, its reads the callback, executes the rest of the script, hen finally runs the callback after the file has been read
    

    //PROMISES : asynchronous, non-blocking
//const { readFile } = require('fs').promises;
//async function hello(){
//const file = await readFile('Self_Archives/Javascript/NodeJS/test.txt','utf8')}
    //^-to be studied further-^