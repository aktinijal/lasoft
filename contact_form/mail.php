<?php
    include 'defines.php';
    include 'email_validation.php';

    $post = (!empty($_POST)) ? true: false;

    if($post){
//
//        $recepient = "grytsenko.kate.ua@gmail.com";
//        $sitename = "Lasoft";
//

        $name = stripslashes($_POST["name"]);
        $email = stripslashes($_POST["email"]);
        $skype = stripslashes($_POST["skype"]);
        $comment = stripslashes($_POST["comment"]);
        $subject = 'Request';
        $error = '';
        $message = '<html>
                        <head>
                            <title>Request</title>
                        </head>
                        <body>
                            <p>Name: '.$name.'</p>
                            <p>Email: '.$email.'</p>
                            <p>Skype: '.$skype.'</p>
                        </body>
            </html>';

        if(!ValidateEmail($email)){
            $error = 'Email isn`t correct!';
        }

        if(!$error){
//            $mail = mail(CONTACT_FORM, $subject, $message,
//                         "From: ".$name." <".$email.">\r\n"
//                         ."Reply-To: ".$email."\r\n"
//                         ."Content-type: text/html; charset=utf-8 \r\n"                            ."X-Mailer: PHP/" .phpversion());


            // Сообщение
            $message = "Line 1\r\nLine 2\r\nLine 3";

            // На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
            $message = wordwrap($message, 70, "\r\n");

            // Отправляем
            $mail = mail('weber.uk.lv@gmail.com', 'My Subject', $message);

            if($mail){
                die('OK');
            }else {
                die('Not Ok');
            }

        }else{
            echo 'Error Result 1111';
            die();
        }

    }


