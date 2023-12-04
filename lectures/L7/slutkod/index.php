<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP F7</title>
    </head>
    <body>
        <main>
        <?php 
            echo("Alexander");
            print("Vestin");

            define("LANGUAGE", "PHP");
            echo(LANGUAGE);


            $num = 123;
            settype($num, "string");

            if($num == 123){
                echo("\$num är lika med värdet 123");
            }

            if($num === 123){
                echo("\$num är lika med talet 123");
            }


            for($i = 1; $i < 7; $i++){
                echo("<h" . $i . ">Heading</h" . $i . ">");
            }

            $arr = array(1, 2, 3, 4, 5, 6);

            foreach($arr as $n){
                echo "<p>" . $n . "</p>";
            }

            echo("<pre>");
            print_r($arr);
            echo("</pre>");




            
        ?>

        <form method="POST">
            <input type="text" name="username"/>
            <input type="password" name="password"/>
            <input type="submit" name="login"/>
        </form>


        <?php
            if(isset($_POST['login'])){
                if(isset($_POST['username']) && isset($_POST['password'])){
                    if($_POST['username'] == "admin"){
                        if($_POST['password'] == "123"){
                            echo("Du är inloggad!");
                        }
                    }
                }
            }

        ?>

        </main>
    </body>
</html>