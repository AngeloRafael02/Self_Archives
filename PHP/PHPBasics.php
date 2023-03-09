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
    $variable = "Variable Value <br>";
    echo $variable;   
    echo var_dump($variable); //outputs variable type
    // data types - Integer, String, Float, Boolean, Array, Object  
    ?>
</body>
</html>