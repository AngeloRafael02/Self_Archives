    //BASIC JAVASCRIPT NOTES
    //BY: Recio, Angelo Rafael

    //VARIABLES
var integer = 100;
var string = "Hello I\'m a string";
var bool = true;

console.log(integer); //console.log() for printing in terminal, document.write() for printing to a browser

    //ARITHMETIC OPERATIONS
        // + : Addition
        // - : Subtraction
        // * : Multiplication
        // / : Division
        // % : Modulus
        // ++ : Increment
        // -- : Decrement
            //var++ : Post - increments variable's value first before using it
            //++var : Pre - increments value, variable isn't changed
    //ASSIGNMENT OPERATORS
        //x += 1 (x = x + 1)
        //x -= 1 (x = x - 1)
        //x *= 1 (x = x * 1)
        //x /= 1 (x = x / 1)
        //x %= 1 (x = x % 1)
    //COMPARISON OPERATORS
        // == : Equal To
        // === :Identical (equal or same type)
        // != : Not Equal To 
        // !== : Not Identical To (not equal or Not same type)
        // > : Greater Than
        // >= : Greater Than or Equals To
        // < : Less Than
        // <= : Less Than of Equal To
    //LOGICAL OPERATORS
        // && : Returns True if both operands are True
        // || : Returns True if one of the operands is True
        // ! : Returns true if Operand is false, Returns false if operand is true
    //CONDITIONAL/TERNARY OPERATORS
    //SYNTAX: var variableName = (condition) ? value1 : value2
var age = 19;
var isAdult = (age < 18) ? "Too Young" : "Old Enough"
//console.log(isAdult)

    //If-ElseS Statements
var age = 20;
if (age > 0 || age <= 12) {
    console.log("Elementary");
} else if(age > 12 || age <= 18) {
    console.log("High School");
} else {
    console.log("You can work I guess");
}


    // Switch Statement : Modified to take multiple cases in a DRY format (introduced in ES6)
var grade = 91;
switch (true) {
    case [75,76,77,78,79].includes(grade):
        console.log("Almost Passing");
        break;
    case [80,81,82,83,84].includes(grade):
        console.log("Passing");
        break;
    case [85,86,87,88,89].includes(grade):
        console.log("Satisfying");
        break;  
    case [90,91,92,93,94].includes(grade):
        console.log("Very Satisfying")
        break;
    case [95,96,97,98,99].includes(grade):
        console.log("Excellent")
        break;
    default:
        console.log("Input Error")
        break;
}

     //FOR Loop: for (init;condition;increment/compound operators){statement/s}
    // Syntax: for(executed before the loop, loop condition, execute when condition ,after loop is executed)
for (i=1;i<=5;i++) {
    //console.log(i);
}

    // last argument can be optional as long as it is called/increment the values inside the loop
var i = 6;
for (;i<10;){
    //console.log(i);
    i++
}

    //WHILE Loop
    //Syntax: while(condition){codeblock}
var i = 1
while(i<=5){
    console.log(i);
    i++;
}