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



    session_start();
    if($_SESSION["inloggad"]=="Japp!") {

        try {
            $dbh = dbConnect();
            $ssql="SELECT personnummer FROM tblusers WHERE id=:id;";

            $stmt = $dbh->prepare($ssql);
            $stmt->bindValue(":id", $_SESSION["id"]);
            $stmt->execute();
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

            $personnummer = $data[0]["personnummer"];

            $dpersnr = openssl_decrypt($personnummer, "AES-128-ECB", "valfristrang1234");

            echo("<h1>Du är inloggad och har personnummer: " . $dpersnr . "</h1>");

        }
        catch(Exception $e) {

        }
        finally {
            $dbh=null;
            $stmt=null;
            $data=null;
        }




        
    }
    else {
        //echo("Nä");
        header("Location: kodexempel.php");
    }


?>