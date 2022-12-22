<?php
    session_start();
    if(!isset($_SESSION['usuario'])){
        header('Location:../login.php');
    }else{
        if($_SESSION['usuario']=="ok"){
            $nombreUsuario=$_SESSION["nombreUsuario"];
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/estilos.css">
    <link rel="stylesheet" href="../../css/estilos.css">
    <title>Inmobiliaria-Administrador</title>
</head>
<body>

    <?php $url="http://".$_SERVER['HTTP_HOST']."/proyectointegrador" ?>

    <header class="anuncio__encabezado">  
        <div class="encabe__menu">
            <img src="../img/logo.svg" alt="" />
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 menu__admin">
                            <li class="nav-item">
                                <h4><a class="nav-link active" aria-current="page" href="<?php echo $url;?>/administrador/inicio.php"><b>Inicio</b></a></h4>
                            </li>
                            <li class="nav-item">
                                <h4><a href="<?php echo $url;?>/administrador/seccion/casas.php">Ad. Casas</a></h4>
                            </li>
                            <li class="nav-item">
                                <h4><a href="<?php echo $url;?>/administrador/seccion/adblog.php">Ad. Blog</a></h4>  
                            </li>
                            <li class="nav-item">
                                <h4><a href="<?php echo $url;?>/administrador/seccion/cerrar.php">Cerrar Sesión</a></h4> 
                            </li>
                            <li class="nav-item">
                                <h4><a href="<?php echo $url;?>">Ver sitio web</a></h4> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
       </div>
    </header>