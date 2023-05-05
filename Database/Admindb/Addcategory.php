<?php
require('../connect.php');
$category=$_POST['category'];
$query="Insert Into eventcategory values('','$category')";
$run=mysqli_query($connect,$query);
$result=($run)?(" successfuly Added"):("failed");
echo $result;
?>