<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "PHPMailer/src/Exception.php";
    require "PHPMailer/src/PHPMailer.php";

    $mail = new PHPMailer(true); /* Создаем объект MAIL */
$mail->CharSet = "UTF-8"; /* Задаем кодировку UTF-8 */
$mail->IsHTML(true); /* Разрешаем работу с HTML */

$name = $_POST["name"]; /* Принимаем имя пользователя с формы .. */
$phone = $_POST["phone"]; /* Телефон */

$email_template = "template_mail.html"; // Считываем файл разметки
$body = file_get_contents($email_template); // Сохраняем данные в $body
$body = str_replace('%name%', $name, $body); // Заменяем строку %name% на имя
$body = str_replace('%phone%', $phone, $body); // строку %phone% на телефон

// $mail->addAddress("kashirin.alexsandr91@gmail.com"); /* Здесь введите Email, куда отправлять */
$mail->addAddress("avtoshkoladriver.tet@gmail.com"); /* Здесь введите Email, куда отправлять */
// $mail->setFrom($email);
$mail->Subject = "[Заявка с форми]"; /* Тема письма */
$mail->MsgHTML($body);

/* Проверяем отправлено ли сообщение */
if (!$mail->send()) {
  $message = "Виникла спробуйте ще раз";
} else {
  $message = "Заявка успішно відправленна очікуйте дзвінка";
}

/* Возвращаем ответ */
$response = ["message" => $message];

/* Ответ в формате JSON */
header('Content-type: application/json');
echo json_encode($response);
?>