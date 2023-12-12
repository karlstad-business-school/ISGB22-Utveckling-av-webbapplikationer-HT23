<?php
    function dbConnect() {
        try {
            $dns = "mysql:dbname=fisk;host=localhost";
            $user = "root";
            $password = "";
            $options = array( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
            $db = new PDO($dns, $user, $password, $options);
            return $db;
        } catch( PDOException $e ) {
            throw $e;
        }
    }

?>  
<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP F10 - Sessioner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <style> 
         
        </style>
    </head>

    <body class="container p-2">
        <header class="jumbotron text-center">
            <h1>Skapa användare</h1>
        </header>

        <main>    

            <?php 

                if(isset($_POST["skicka"])){

                    //Vettig validering (Sparas till workshop)
                    //1. Kolla dublett av epost i databasen
                    //2. Kolla att eposten är giltig
                    //3. Kolla losenord antal tecken + siffra + specicialtecken
                    //4. Kolla att båda lösen är samma

                    //Validera personnummer

                    try {
                        $dbh = dbConnect();

                        $sql = "INSERT INTO users(epost, losenord, personnummer) VALUES(:epost,:losen,:fisk);";

                        $stmt = $dbh->prepare($sql);

                        $losen = $_POST["losen1"];
                        $hashatLosen = hash("SHA256",$losen);

                        $persnr = $_POST["persnr"];
                        $nyckel = "valfristrang1234";
                        $metod = "AES-128-ECB";
                        $krypteratPersonnummer = openssl_encrypt($persnr, $metod, $nyckel);

                        $stmt->bindValue(":epost", $_POST["epost"]);
                        $stmt->bindValue(":losen", $hashatLosen);
                        $stmt->bindValue(":fisk", $krypteratPersonnummer);

                        $stmt->execute();

                        $stmt = null;
                        $dbh = null;


                    }
                    catch(Exception $ex) {
                        //Gör nåt kul
                    }






                }
            
            
            
            
            
            
            
            
            
            
            ?>


            
        <form method="POST" action="<?php echo($_SERVER["PHP_SELF"]) ?>">
            <div class="form-group">
                <label for="epost">Ange din epost:</label>
                <input type="email" name="epost" id="epost" required>
            </div>
            <div class="form-group">
                <label for="persnr">Ange personnummer (YYMMDD-XXXX)</label>
                <input type="text" id="persnr" name="persnr" required>
            </div>
            <div class="form-group">
                <label for="losen1">Välj ett lösenord (Upprepa två gånger)</label>
                <input type="password" id="losen1" name="losen1">
                <input type="password" id="losen2" name="losen2">
            </div>
            <input type="submit" name="skicka" class="btn btn-danger" value="Skicka">
        </form>
            

      
            


        </main>

    </body>

</html>