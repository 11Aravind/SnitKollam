<?php
include '../connect.php';
$id=$_POST['id'];

$query="delete from eventgallery where gallery_id=$id";
$run=mysqli_query($connect,$query);
if($run){
echo "successfuly deleted";
}
else{
    echo "deletion was failed";
}
?>