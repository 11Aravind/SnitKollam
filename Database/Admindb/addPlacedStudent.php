<?php
require('../connect.php');
$jobtype=$_POST['jobtype'];
$company=$_POST['company'];
$fname=$_FILES['eventImage']['name'];
$fname_extension=pathinfo($fname,PATHINFO_EXTENSION);
$valid_extension=array('jpeg','png','webp','jpg');
$result=[];
$fname_extension=strtolower($fname_extension);
if(in_array($fname_extension,$valid_extension))
{
$temp_name=rand().".".$fname_extension;
$destination_path="../uploadImage/".$temp_name;
if(move_uploaded_file($_FILES['eventImage']['tmp_name'],$destination_path))
{
    // echo "file Uploaded";
    $destination_path="uploadImage/".$temp_name;
    // $store_path="uploadImage/".$temp_name";
    
    $query="INSERT INTO placedStudents values('','$destination_path','$jobtype','$company')"; 
    $result= (mysqli_query($connect,$query))?(["result"=>"Successfult Inserted","class"=>"green"]):(["result"=>"Data Insertion Failed","class"=>"red"]);
    // print_r($query);
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