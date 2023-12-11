<?php
     session_start();
    $titel = "Logga in";
    $inloggad = "false";
    $mystr = "Ej inloggad";

    

    if(isset($_POST['btnLogin'])) {
        
        try {
           
            $dataSourceName = "mysql:" . "host=localhost;" . "dbname=bilar;" . "charset=utf8";
            $userName = "root";
            $passWord = "";
            $dbhsOptions = array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            );

            $dbh = new PDO($dataSourceName, $userName, $passWord, $dbhsOptions);
  
            $username = $_POST["txtUsername"];
            $password = $_POST["txtPassword"];

            $sql = "SELECT * FROM users WHERE username=:anv AND password=:losen";

            $stmt = $dbh->prepare($sql);
            $stmt->bindValue(":anv", $username);
            $stmt->bindValue(":losen", $password);

            $stmt->execute();

            if($stmt->rowCount()>0) {
                $titel = "Inloggad!!!!";
                $inloggad="true";
                $mystr = getCars($dbh);
                $_SESSION["inloggad"]="true";
            }


        }
        catch(PDOException $error){
            echo("Det gick åt hvete!");
        }

    }
    else if(isset($_SESSION["inloggad"])) {
        $dataSourceName = "mysql:" . "host=localhost;" . "dbname=bilar;" . "charset=utf8";
        $userName = "root";
        $passWord = "";
        $dbhsOptions = array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        );

        $dbh = new PDO($dataSourceName, $userName, $passWord, $dbhsOptions);
        $mystr = getCars($dbh);
        $inloggad="true";
    }

    function getCars($dbh) {
        try {
            
            $sql = "SELECT * FROM cars";
            $stmt = $dbh->prepare($sql);
            $stmt->execute();

            $mystr = "<h1>Alla våra schyssta bilar</h1>";
            while($row = $stmt->fetch()) {
                $mystr.="<p>Bilmärke: " . $row["fabrikat"] . "<br>";
                $mystr.="Modell: " . $row["modell"] . "</p>";
            }

            return $mystr;
  
        }
        catch(PDOException $error){
            echo("Det gick åt hvete!");
        }

    }



  


?>
<!DOCTYPE html>
<html lang="sv">
    <head>
        <title><?php echo($titel); ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.0/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">  
        <link href="assets/LoginForm.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script> 
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
   
    </head>
    <body>
    <div class="page-container">
        <!-- Login box -->  
        <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-hidden="true" >
            <div class="modal-dialog">
                <div class="loginmodal-container modal-content">
                    <form method="POST">
                        <h1>Logga in på ditt konto</h1><br/>                 
                        <input type="text" ID="txtUsername" name="txtUsername" placeholder="Användarnamn">
                        <input id="txtPassword" name="txtPassword" placeholder="Lösenord" type="password" />
                        <input type="submit" ID="btnLoggaIn" name="btnLogin" value="Logga in" class="btn btn-primary w-100">                             
                    </form>
                </div>
            </div>
		</div>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
                <a class="navbar-brand" href="#"><img src="assets/rooster-logo-silhouette-clipart.jpg" alt="logo" style="width: 10%; height:auto;"> Tuppenfina bilar!</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        
                        <li class="nav-item">
                            <a class="nav-link" id="nav-art" href="#"><span class="fas fa-car-side"></span> Lager</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="nav-lev" href="#"><span class="fa fa-truck-moving"></span> Leveranser</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="nav-cust" href="#"><span class="fa fa-users"></span> Kunder</a>
                        </li>
                       
                    </ul>
                   
                </div>
            </nav>
        </header>
        <main><?php echo($mystr)?></main>  
    </div>
    <?php
        if($inloggad!="true") {
            echo("<script>");
            echo("$('#login-modal').modal('show');");
            echo("</script>");
        }
    ?>
    </body>
</html>