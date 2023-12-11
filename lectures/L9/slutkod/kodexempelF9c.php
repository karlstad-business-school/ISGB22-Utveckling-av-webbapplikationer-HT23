<?php

    $antal = 0;
    $stringToEcho = "";

    if( isset( $_POST["skicka"] ) ) {

        if(isset($_COOKIE["antal"])) {
            $antal = $_COOKIE["antal"];
        }
        $antal++;
        setcookie("antal", $antal, time() + 3600);
        $stringToEcho = "Du har tryckt " . $antal . " gånger på knappen";


    }

    if(isset($_POST["rensa"])) {

        setcookie("antal", "", time()-3600);
    
    }
?>  
<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP F9 - kakor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <style> 
            img {
                width: 15%;
                height: 15%;
                padding-right: 5px;
                padding-bottom: 10px;
            }
        </style>
    </head>

    <body class="container p-2">
        <header class="jumbotron text-center">
            <h1>PHP F9 - Räkna antalet klick på knappen "Skicka"!</h1>
        </header>

        <main>    

            <?php echo($stringToEcho); ?>

            <form action="<?php echo($_SERVER["PHP_SELF"]); ?>" method="post">
                <input type="submit" name="skicka" value="Skicka" />
                <input type="submit" name="rensa" value="Rensa" />
            </form>

        </main>

    </body>

</html>