<?php
require('../connect.php');
// $query="SELECT * from eventgallery";
$query="SELECT eventgallery.gallery_id,eventcategory.eventName, eventgallery.eventPic FROM eventgallery,eventcategory where eventcategory.event_id=eventgallery.event_id";
// print_r($query);
$result=array();
$run=mysqli_query($connect,$query);
if(mysqli_num_rows($run)>0)
{
while($fetch=mysqli_fetch_assoc($run))
$result[]=$fetch;
// echo json_encode($result);
}
else{
$result="no data avalilable";
}
echo json_encode($result);
?>