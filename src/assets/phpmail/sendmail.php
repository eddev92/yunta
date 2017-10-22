<?php
// Variables
$email = trim($_POST['email']);
$mensaje = trim($_POST['mensaje']);
$name = trim($_POST['name']);
$telefono = trim($_POST['telefono']);


if( isset($name) && isset($email) ) {

	// Avoid Email Injection and Mail Form Script Hijacking
	// $pattern = "/(content-type|bcc:|cc:|to:)/i";
	// if( preg_match($pattern, $name) || preg_match($pattern, $email) || preg_match($pattern, $mensaje) ) {
	// 	exit;
	// }

	// Email will be send
	$to = "llanca872@gmail.com"; // Change with your email address
	$sub = "Desde la web 3vu"; // You can define email subject
	// HTML Elements for Email Body
	$body = <<<EOD
	<strong>Name:</strong>$name<br>
	<strong>Email:</strong> <a href="mailto:$email?subject=feedback" "email me">$email</a> <br> <br>
	<strong>Telefono:</strong> $telefono <br>
	<strong>Mensaje:</strong> $mensaje <br>
	
EOD;
//Must end on first column
	

$headers = "From: " . strip_tags($_POST['$email']) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$message = '<p><strong>This is strong text</strong> while this is not.</p>';

	// PHP email sender
	mail($to, $sub, $body, $headers);
}


?>
