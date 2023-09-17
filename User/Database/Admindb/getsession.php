<?php
include '../connect.php';
// session_start();
if(isset($_SESSION['admin_id']))
{  
    print json_encode(true);  
}
else{
    print json_encode(false);
}
// print json_encode($_SESSION['admin_id']);
?>