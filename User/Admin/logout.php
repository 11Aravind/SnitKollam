<?php
include './Database/connect.php';
session_destroy();
unset($_SESSION["admin_id"]);
header('Location: index.html'); 
?>