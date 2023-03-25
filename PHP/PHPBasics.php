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
        echo "<br>";

        // CREATING CONSTANTS - Constants are automatically Global
        // Syntax: define("VariableName","ConstantValue",case-sensitivity flag)
        define("constantVariable","This is String Value from a Constant Variable");
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
        echo "<br>";
        
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
        echo "<br>";
        echo addTwoNumbers(6,9);
        echo "<br>";

        // ARRAYS
        // indexed arrays
        $arr = array("Red","Orange","Yellow");
        print_r($arr);      // using the whole array
        echo "<br>";
        echo $arr[1];   //Using a single element of the array, calling its index
        echo "<br>";
        echo count($arr); // count() - functions counting the elements of the array
        echo "<br>";
        echo sort($arr); // sort() - functions sorting the elements of the array
        echo "<br>";
        echo rsort($arr); // rsort() - functions sorting the elements in reverse
        echo "<br>";
        // associative array
        $arr2 = array("Philippines"=>"Manila","USA"=>"Washington","Germany"=>"Berlin");
        print_r($arr2);      // using the whole array
        echo "<br>";
        echo $arr2["Philippines"];   //Using a single element of the array, calling its key
        echo "<br>";
        echo asort($arr2); // asort() - functions sorting the elements of the associative array according to value
        echo "<br>";
        echo ksort($arr2); // ksort() - functions sorting the elements of the associative array according to key
        echo "<br>";
        echo arsort($arr2); // arsort() - functions sorting the elements of the associative array according to value in reverse
        echo "<br>";
        echo krsort($arr2); // krsort() - functions sorting the elements of the associative array according to key in reverse
        echo "<br>";
        // multi-dimensional array
        $multiArr = array(array(1,2,3,4,5),array(6,7,8,9,0),array(11,12,13,14,15));
        print_r($multiArr);  //output whole multi-dimensional array
        echo "<br>";
        echo $multiArr[1][2]; //output a simple element from the multi-dimensional array
        echo "<br>";

        // SUPERGLOBALS
        // $GLOBALS - used to access global variables anywhere from the PHP Script
        $d = 75;
        $e = 69; // go to h4 element with id named "GLOBAL_VARIABLE" for usage of $GLOBALS
        // $_SERVER
        echo $_SERVER['PHP_SELF']; // PHP_SELF - return filename of current script
        echo "<br>";
        echo $_SERVER['SERVER_NAME']; // SERVER_NAME returns tha name of the host server
        echo "<br>";
        echo $_SERVER['HTTP_HOST']; // HTTP_HOST - returns the host header from the current request
        echo "<br>";
        echo $_SERVER['HTTP_USER_AGENT']; // HTTP_USER_AGENT - returns text that the browsers themselves send to the webserver to identify themselves
        echo "<br>";
        echo $_SERVER['SCRIPT_NAME']; // SCRIPT_NAME - returns the path of the current script
        echo "<br>";
    ?>

    <!--$_REQUEST - super global variable used to collect data after submitting an html form--> 
    <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
        First Name: <input type="text" name="fname">
        <input type="submit">
    </form>
    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // collect value of input field
            $name = htmlspecialchars($_REQUEST['fname']);
            if (empty($name)) {
                echo "Name is empty";
            } else {
                echo $name;
            }
        }
    ?>
    <h4 id="GLOBAL_VARIABLE"><?php echo $GLOBALS['d'] + $GLOBALS['e']?></h4>

    <!--$_POST - super global variable which is used to collect form data after submitting an HTML form with method="post"-->
    <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
        Last Name: <input type="text" name="lname">
        <input type="submit">
    </form>
    <?php
        // $_POST is also widely used to pass variables.
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // collect value of input field
            $name = $_POST['lname'];
            if (empty($name)) {
                echo "Name is empty";
            } else {
                echo $name;
            }
        }
    ?>
    <br>

    <!--$_GET  - super global variable which is used to collect form data after submitting an HTML form with method="get".-->
    <!-- can also collect data  sent in the URL -->
    <!--SYNTAX: fileName?variable1=value1&variable2=value2...-->
    <a href="test2.php?var1=PHP_Forms&var2=<?php echo (empty($lname)) ? "Input not Given" : $lname;  ?>;">Go to PHP_Forms.php</a>

</body>
</html>