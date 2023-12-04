<?php
    include("databaseFunctions.php");
?>
<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP F8</title>
    </head>
    <body>
        <main>
        
        <?php
            try {

                if(isset($_POST["btnDelete"])) { //DELETE
                }

                if(isset($_POST["btnSave"])) { //UPDATE eller INSERT
                }

                if(isset($_POST["btnEdit"])) { //SELECT eller inte.
                }
                
            }catch(PDOException $e) {
                
            
            } finally{
            
            }
            
        ?>

        </main>
    </body>
</html>
