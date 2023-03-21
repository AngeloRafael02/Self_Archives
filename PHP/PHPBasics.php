<!--HTML markups still work on PHP-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo "Hello World <br>";
        echo "<strong>Html markups can be added here</strong><br>";
        //This is a comment
        /*This is a 
        multiline */

        //VARIABLES
        $variable = "Variable Value <br>"; //Variable syntax
        echo $variable;   
        echo var_dump($variable); //outputs variable type
        echo "<br>";

        //SOME STRING FUNCTIONS
        echo str_word_count($variable); //outputs number of words
        echo "<br>";
        echo strpos("Hello world!", "world"); //finds string in another string returns character position if founds, returns false if not
        echo "<br>";
        echo strrev("Hello"); //returns reversed string
        echo "<br>";
        echo str_replace("Baby","Aira","Hello Baby"); //str_replace("word To replace", "String with word to replace", "New word")
        // data types - Integer, String, Float, Boolean, Array, Object  

        // INTEGER FUNCTIONS and CONSTANTS
        $number = 69420;
        echo is_int($number); // is_int() - return boolean if numeric value is an integer or not
        echo PHP_INT_MAX; // returns Maximum value in php integer
        echo "<br>";
        echo PHP_INT_MIN; // returns Minimum value in php integer
        echo "<br>";
        echo PHP_INT_SIZE; // returns Size of integer in bytes (8)
        echo "<br>";
        // FLOAT FUNCTIONS and CONSTANTS
        $bigNumber = 420.69;
        echo is_float($bigNumber); //is_Float - return boolean value of value is float or not
        echo "<br>";
        echo PHP_FLOAT_MAX; // return Maximum value of php float
        echo "<br>";
        echo PHP_FLOAT_MIN; // return Minimum value of php float
        echo "<br>";
        echo PHP_FLOAT_EPSILON; // returns the smallest representable positive number x, so that x + 1.0 != 1.0
        echo "<br>";
        // OTHERS
        echo is_nan($number); //is_nan() - return boolean value if argument is not a number
        echo "<br>";
        var_dump(is_numeric("Hi")); //return a boolean value if argument is a numeric or not 
        echo "<br>";

        // MATH FUNCTIONS
        echo(pi()); //returns value of PI
        echo "<br>";
        echo(min(0, 150, 30, 20, -8, -200));  // returns maximum of a series of numbers
        echo "<br>";    
        echo(max(0, 150, 30, 20, -8, -200));  // returns minimum of a series of numbers
        echo "<br>";
        echo(abs(-89)); // returns absolute value of a value
        echo "<br>";
        echo(sqrt(81)); // returns square root of a value
        echo "<br>";
        echo(round(1.50)); //rounds number into the nearest integer
        echo "<br>";
        echo(rand(0,100)); //returns a random number in a range

        // CREATING CONSTANTS - Constants are automatically Global
        // Syntax: define("VariableName","ConstantValue",case-sensitivity flag)
        define("constantVariable","This is String Value from a Constant Variable",true);
        echo constantVariable;
        echo "<br>";

        // CONTROL FLOWS STATEMENTS
        // IF-ELSE Statement
        $secondNumber = 69;
        if ($secondNumber > 90 && $secondNumber < 80  ){
            echo "80 - 90";
        } else if ($secondNumber > 80) {
            echo "> 80";
        } else {
            echo "< 90";
        }
        echo "<br>";
        // SWITCH STATEMENT
        switch ($secondNumber) {
            case 69 :
                echo "number is 69";
                break;
            case 70 :
                echo "number is 70";
                break;
            default:
            echo "number is not 69 nor 70";
                break;
        }
        echo "<br>";
        // WHILE STATEMENT
        while ($secondNumber > 74) {
            echo "hi";
            $secondNumber++;
        }
        echo "<br>";
        // DO-WHILE STATEMENT
        do {
            echo "String is done at least once";
            $secondNumber++;
        } while ($secondNumber > 75);
        echo "<br>";
        // FOR LOOP STATEMENT
        for ($i=0; $i < 5; $i++) { 
            echo $i;
        }
        echo "<br>";
        // FOREACH STATEMENT
        $colors = array("red", "green", "blue", "yellow");
        foreach ($colors as $value) {
            echo "$value";
        }
        
        // FUNCTIONS
        //Declaring Function
        function sayHI(){
            echo "HI";
        }
        function addTwoNumbers(int $a, int $b){
            return $a + $b;
        }
        // Calling a function
        sayHI();
        echo addTwoNumbers(6,9);

    ?>
</body>
</html>