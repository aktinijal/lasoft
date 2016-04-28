<?php

$recepient = "grytsenko.kate.ua@gmail.com";
$sitename = "Lasoft";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$skype = trim($_POST["skype"]);
$message = "Name: $name \nEmail: $email \nSkype: $skype \nText: $text";

$pagetitle = "New message from website \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charst=\"utf-8\"\n From:$recepient");
?>