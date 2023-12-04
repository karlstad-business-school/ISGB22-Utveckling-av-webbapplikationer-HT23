<?php

    /*
        GRANT ALL ON bilar.* To 'mysqluser'@'localhost' IDENTIFIED BY 'mysqlpassword';
        FLUSH PRIVILEGES;
    */

    function connectToDatabase() {

        try {
            $dsn = "mysql:host=localhost:3306;dbname=bilar;charset=utf8";
            $username = "mysqluser";
            $password = "mysqlpassword";

            $dbhsOptions = array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            );

            $dbh = new PDO($dsn, $username, $password, $dbhsOptions);

            return $dbh;

        }catch(PDOException $e) {
            throw $e;
        }
    }

    function listCarsAsForms($dbh) {

        try {

            $sql = "SELECT * FROM cars ORDER BY id DESC;";
            $stmt = $dbh->prepare($sql);
            $stmt->execute();

            while($row = $stmt->fetch()) {

                $farg = $row["farg"];
                $fabrikat = $row["fabrikat"];
                $modell = $row["modell"];
                $id = $row["id"];

                ?>

                <div style='background-color: <?php echo($farg); ?>'>
                    <form action='<?php echo( $_SERVER["PHP_SELF"] ); ?>' method='post'>
                
                        <p>Fabrikat: <?php echo($fabrikat); ?></p>
                        <p>Modell: <?php echo($modell) ?></p>
                        <input type='hidden' name='hidId' value='<?php  echo($id); ?>'>
                        <input type='submit' name='btnEdit' value='Edit'>
                        <input type='submit' name='btnDelete' value='Delete'>

                    </form>
                </div>

                <?php
            
            }

        }catch(PDOException $e) {
            throw $e;

        }finally {
            $stmt = null;
        }

    }

    function listCarsAsLinks($dbh) {}

    function deleteCar($dbh, $id) {
        //DELETE
    }

    function updateCar($dbh, $id, $fabrikat, $modell, $regnr, $farg, $mil) {
        //UPDATE
    } 

    function insertCar($dbh, $fabrikat, $modell, $regnr, $farg, $mil) {
        //INSERT
    }

    function selectCar($dbh, $id) {
        //SELECT
    }

    function createForm($row = null) {

        $id ="";
        $fabrikat = "";
        $modell = "";
        $regnr = "";
        $mil = "";
        $farg = "#00ff00";

        if($row !== null) {
            $id = $row["id"];
            $fabrikat = $row["fabrikat"];
            $modell = $row["modell"];
            $regnr = $row["regnr"];
            $mil = $row["mil"];
            $farg = $row["farg"];
        }

        echo("<div><form action='" . $_SERVER["PHP_SELF"]  . "' method='post'>" . PHP_EOL);
        
        if($row !== null) {
            ?>
            <input type='hidden' name='hidId' value='<?php echo($id); ?>'>
            <span style='padding-right: 10px; border: 1px solid black;'>Id: <?php echo($id); ?></span>
            <?php
        }
        
        ?>
        <input type='text' name='txtFabrikat' value='<?php echo($fabrikat); ?>' placeholder='Fabrikat'>
        <input type='text' name='txtModell' value='<?php echo($modell) ?>' placeholder='Modell'>
        <input type='text' name='txtRegnr' value='<?php echo($regnr) ?>' placeholder='Regnr'>
        <input type='number' name='nbrMil' value='<?php echo($mil) ?>' min='0' placeholder='Mil'>
        <input type='color' name='nbrFarg' value='<?php echo($farg) ?>'>
        <input type='submit' name='btnSave' value='Save'>
        <input type='submit' name='btnRensa' value='Reset'>

        </form></div>
        <?php

    }
