<?php
require('connect.php');
$email=$_POST['email'];
$password=$_POST['password'];
$query="SELECT * FROM adminAuthentication where email='".$email."' AND password='".$password."'";
$run=mysqli_query($connect,$query);
?>