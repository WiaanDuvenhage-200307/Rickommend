<?php

if(isset($_POST['submit'])){

    $message = $_POST['feedback'];
    $subject = "Project Feedback";

    $mailTo = "feedback@rickommend.co.za";
    $headers = "From: My website";
    $txt = "User says ".$message;


    mail($mailTo, $subject, $txt, $headers);
    header("Location: contact.html?mailsend");


}
?>