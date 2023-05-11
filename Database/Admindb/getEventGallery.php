<?php
require('../connect.php');
$query="SELECT * from eventgallery";
$result=array();
$run=mysqli_query($connect,$query);
if(mysqli_num_rows($run)>0)
{
while($fetch=mysqli_fetch_assoc($run))
$result[]=$fetch;
echo json_encode($result);
}
else{
$result="no data avalilable";
}
echo json_encode($result);
?>