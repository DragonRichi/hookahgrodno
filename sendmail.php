<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require "phpmailer/src/Exception.php";
require "phpmailer/src/PHPMailer.php";

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language');

$mail->IsHTML(true);

$mail->setFrom('infro@mail.ru', 'Приёмщик');
$mail->addAddress('bashurai@protonmail.com');
$mail->Subject = 'Привет! Геркулес!';

$body = '<h1>Супер письмо!</h1>';

if (trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p>';
}
if (trim(!empty($_POST['tel']))) {
    $body .= '<p><strong>Телефон:</strong> ' . $_POST['tel'] . '</p>';
}

$mail->$Body = $body;

if (!$mail->send()) {
    $message = 'ошибка';
} else {
    $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type:application/json');
echo json_encode($response);
