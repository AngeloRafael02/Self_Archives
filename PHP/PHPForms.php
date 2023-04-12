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
    echo "File:  " . $_GET['var1'] . " Welcome: " . (empty($_GET['var2'])) ? "Input not Given from PHP_Basic.php" : $_GET['var2'];
   
    $name = $email = "";
    ?>
        <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
            <p>Name: </p><input type="text" name="name" value="<?php echo $name;?>">
            <br>
            <p>E-Mail: </p><input type="text" name="name" value="<?php echo $email;?>">
        </form>
    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $lname = $_POST['lname'];
            if (empty($lname)) {
                echo "Name is empty";
            } else {
                echo $lname;
            }
        }
    ?>
    
</body>
</html>