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
    echo PHP_INT_MIN; // returns Maximum value in php integer
    echo "<br>";
    echo PHP_INT_SIZE; // returns Size of integer in bytes (8)
    echo "<br>";
    ?>
</body>
</html>