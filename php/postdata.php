<?php
include "db.php";

if(isset($_POST['submit']))
{		
    $userName = $_POST['userName'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $insert = mysqli_query($db,"INSERT INTO `form_data`(`userName`, `email`, `subject`, `message`) VALUES ('$userName','$email','$subject','$message')");

    if(!$insert)
    {
        echo mysqli_error();
    }
    else
    {
        echo "Records added successfully.";
    }
}

mysqli_close($db);
?>