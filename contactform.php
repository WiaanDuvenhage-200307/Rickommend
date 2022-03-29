<?php 
if(isset($_POST['submit'])){
    $to = "feedback@rickommend.co.za"; 

    $subject = "SEO Project Feedback";
    $message = $_POST['feedback'];

    mail($to,$subject,$message);

    header('Location: http://www.rickommend.co.za");
    }
?>