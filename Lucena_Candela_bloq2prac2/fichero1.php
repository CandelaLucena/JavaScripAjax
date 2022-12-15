<?php
$opciones = array(

    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",

    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,

    PDO::ATTR_PERSISTENT => true

);

$pdo = new PDO(

    'mysql:host=localhost;dbname=ajaxjavascript;charset=utf8',

    'root',

    'sa',

$opciones);

$nombre = $_POST["nombre"];
$correo = $_POST["correo"];

$sql = "INSERT INTO `contacto`(`nombre`, `correo`) VALUES ('[$nombre]','[$correo]')";
$pdo->exec($sql);
?>