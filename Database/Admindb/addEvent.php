<?php
require('../connect.php');
$category_id=$_POST['eventCategory'];
$fname=$_FILES['eventImage']['name'];
$fname_extension=pathinfo($fname,PATHINFO_EXTENSION);
$valid_extension=array('jpg','jpeg','png','webp');
$result=[];
if(in_array($fname_extension,$valid_extension))
{
$temp_name=rand().".".$fname_extension;
$destination_path="../uploadImage/".$temp_name;
if(move_uploaded_file($_FILES['eventImage']['tmp_name'],$destination_path))
{
    // echo "file Uploaded";
    $query="INSERT INTO eventGallery values('','$category_id','$destination_path')"; 
    $result= (mysqli_query($connect,$query))?(["result"=>"Successfult Inserted","class"=>"green"]):(["result"=>"Data Insertion Failed","class"=>"red"]);
    // echo $result;
}
else{
    $result= ["result"=>"Image Not Uploaded ","class"=>"red"];
    // echo $result;
}
}
else{
    // echo "failed";//extension correct alla
    $result= ["result"=>"Something went to wrong ,Try again","class"=>"red"];
    echo json_encode($result);
}
echo json_encode($result);

?>