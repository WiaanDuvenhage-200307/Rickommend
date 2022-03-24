<?php

if(isset($_POST['submit'])) {
    $message = $_POST['message'];

    $mailTo = "200307@virtualwindow.co.za";

    $txt = $message;

    mail($mailTo, $txt);
    header("Location: contact.html?mailsend");
}