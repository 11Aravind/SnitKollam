<?php
require('../connect.php');
$id= $_POST['id'];
if($id=='-1')
{
    $query="SELECT * from eventGallery";   
}
else{
$query="SELECT * from eventGallery where event_id=$id";
}
// $query="SELECT eventcategory.eventName, eventgallery.eventPic FROM eventgallery,eventcategory where eventcategory.event_id=$id and eventgallery.event_id=$id;";
// print_r($query);
$run=mysqli_query($connect,$query);
$result=[];
$row=[];
if(mysqli_num_rows($run)>0)
{
while($fetch=mysqli_fetch_assoc($run))
$result[]=$fetch;
}
else{
    $result="No Picture available";  
}
if($id!='-1'){
$category="SELECT eventName from eventcategory where event_id=$id";
$exe=mysqli_query($connect,$category);
$row=mysqli_fetch_assoc($exe);
}
else
{
    $row= array("eventName"=> 'All Category');
    // echo json_encode(["result"=>$result,"categoryName"=>$row]);
}
echo json_encode(["result"=>$result,"categoryName"=>$row]);
?>