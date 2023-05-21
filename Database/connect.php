<?php
$server="localhost";
$username="root";
$password="";
$database="snitkollam";
$connect=mysqli_connect($server,$username,$password,$database);
if(!$connect)
echo "connection failed".mysqli_connect_error();
else
session_start();
// $_SESSION['admin_id']=null;
?>