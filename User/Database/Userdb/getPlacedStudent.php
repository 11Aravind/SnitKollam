<?php
include '../connect.php';
$query="select * from placedstudents";
// print_r($query);
$run=mysqli_query($connect,$query);
$result=[];
if(mysqli_num_rows($run)>0)
{
    while($fetch=mysqli_fetch_assoc($run))
    {
        $result[]=$fetch;
    }
   
}
echo json_encode($result);
?>