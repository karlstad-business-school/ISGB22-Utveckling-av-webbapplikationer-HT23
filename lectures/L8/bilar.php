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

                $dbh = connectToDatabase();

                if(isset($_POST["btnDelete"])) {
                    //DELETE
                    //Ropa på deleteCar() skicka med den data funktionen önskar ta emot.
                }

                if(isset($_POST["btnSave"])) {
                    //UPDATE eller INSERT
                    //Om hidId finns ropa på updateCar() annars insertCar() och skicka med den data funktionerna önskar ta emot.
                }

                if(isset($_POST["btnEdit"])) {
                    //SELECT
                    selectCar($dbh, $_POST["hidId"]);
                } else {
                    createForm();
                }

                listCarsAsForms($dbh);
                
            }catch(PDOException $e) {
                echo($e->getMessage());
            
            } finally{
                $dbh = null;
            }
            
        ?>

        </main>
    </body>
</html>
