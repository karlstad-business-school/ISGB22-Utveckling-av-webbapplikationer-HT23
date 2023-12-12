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
        <title>PHP Säkerhet - Utveckling av webbapplikationer</title>
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
                if( isset( $_POST['skicka'])){

                    //Validera inskickade data.... Gör på worskshop:

            

                    // 0. Kontrollera dublett av epost
                    // 1. Kontrollera att epost matchar mönster för epost
                    // 2. Kontrollera lösenord är samma i båda rutorna

                    //personnummer? 12tkn?
                    $personnummer = $_POST["persnr"];
                    $pers_first = substr($personnummer,0,8);
                    $pers_last = substr($personnummer, -4);

                    try {

                        if(!filter_var($_POST["epost"], FILTER_VALIDATE_EMAIL)) {
                            throw new Exception("Ogiltig epost");
                        }

                        if($_POST["losen1"] != $_POST["losen2"]) {
                            throw new Exception("Ej samma lösenord");
                        }


                        $dbh = dbConnect();

                        $ssql = "SELECT * FROM tblusers WHERE epost=:epost";
                        $stmt=$dbh->prepare($ssql);
                        $stmt->bindValue(":epost", $_POST["epost"]);
                        $stmt->execute();
                        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
                        if(count($data)>0) {
                            throw new Exception("Din epost finns redan!");
                        }

                        if(!is_numeric($pers_first) || !is_numeric($pers_last)) {
                            throw new Exception("Fyll i personnummer rätt!");
                        }

                        $dbh = dbConnect();

                        $ssql = "INSERT INTO tblusers(epost, losen, personnummer) VALUES(:epost, :losen, :pers);";


                        $losen = $_POST["losen1"];
                        $nyckel = "valfristrang1234";
                        $hashad_losen = hash("SHA256",$losen);

                        $krypterat_personnummer = openssl_encrypt($personnummer, "AES-128-ECB", $nyckel);

                        $stmt = $dbh->prepare($ssql);
                        $stmt->bindValue(":epost", $_POST["epost"]);
                        $stmt->bindValue(":losen", $hashad_losen);
                        $stmt->bindValue(":pers", $krypterat_personnummer);

                        $stmt->execute();

                        $lastID = $dbh->lastInsertId();

                        session_start();
                        $_SESSION["inloggad"]="Japp!";
                        $_SESSION["id"]=$lastID;


                    }
                    catch(Exception $ex) {
                        echo("<h1>" . $ex->getMessage() . "</h1>");
                    }
                    finally {
                        $dbh=null;
                        $stmt=null;
                        $data=null;

                    }






                }
            

            ?>
        


            <form method="POST" action='<?php echo($_SERVER["PHP_SELF"]) ?>'>
                <div class="form-group">
                    <label for="epost">E-post: </label>
                    <input type="email" id="epost" name="epost" required>
                </div>
                <div class="form-group">
                    <label for="persnr">Personnumer (YYYYMMDD-XXXX): </label>
                    <input type="text" id="persnr" name="persnr" required>
                </div>
                <div class="form-group">
                    <label for="losen1">Lösenord: </label>
                    <input type="password" id="losen1" name="losen1" required>
                </div>
                <div class="form-group">
                    <label for="losen2">Upprepa Lösenord: </label>
                    <input type="password" id="losen2" name="losen2" required>
                </div>
                <input type="submit" name="skicka" value="skicka" class="btn btn-danger">    

            </form>
        </main>

    </body>

</html>