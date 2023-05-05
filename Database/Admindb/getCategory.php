<?php
require('../connect.php');
$query="select * from eventcategory";
$run=mysqli_query($connect,$query);
$result=[];
if(mysqli_num_rows($run)>0)
{
while($row=mysqli_fetch_assoc($run))
$result[]=$row;
}
echo json_encode($result);
?>