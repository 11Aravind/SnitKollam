<?php
require('../connect.php');
$email=$_POST['email'];
$password=$_POST['password'];
$query="SELECT * FROM adminAuthentication where email='".$email."' AND password='".$password."'";
$run=mysqli_query($connect,$query);
if(mysqli_num_rows($run)==1)
 {
    $fetch=mysqli_fetch_assoc($run);
    $_SESSION['admin_id']=$fetch['admin_id'];
    echo "success";
 }

 else
 echo "faile";
 
?>