<?php
/**
 * Created by PhpStorm.
 * User: Sancho
 * Date: 3/2/2018
 * Time: 6:09 PM
 */

require "./vendor/autoload.php";
include "Smtpmailer.php";
$mail = new Smtpmailer();
$mail->send("messagefromlanding@gmail.com","Обратная связь BestinBuild","Name: ".$_POST['name']."<br>Email: ".$_POST['email']."<br>Message: ".$_POST['message']);
