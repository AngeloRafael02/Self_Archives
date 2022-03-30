    //Async Javascript Notes
    //By: Angelo Rafael Recio

    //javascript funciton are executed by the order they ar called, not the sequence they are defined
function madeFirst(){
    console.log("hi");
}
function madeSecond(){
    console.log("hello");
}
madeSecond();//made seconds was called first
madeFirst();


    //JAVASCRIPT CALLBACKS: a call back is a function passed as an argument to another function.
function isEven(number) {
    return number % 2 == 0;
    }
      
function filterer(numbers, fn) {
    let results = [];
    for (const number of numbers) {
        if (fn(number)) {
        results.push(number);
        }
    }
    return results;
}
let numbers = [1, 2, 4, 7, 3, 5, 6, 8];
console.log(filterer(numbers, isEven)); //uses a function as one of the arguments 


    //ASYNCHRONOUS 
setTimeout(function(){delayed("I'm Delayed");}, 3000); //use SetTimeout to delay a function or event for a certain amount of time
function delayed(value){
    console.log(value);
}

setInterval(time, 1000); // Use SetInterval to loop a certain event for a certain amount of time
function time(){
    let d = new Date();
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}
