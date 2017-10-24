<?php

$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
 
	$email = $request->email;
	$mensaje = $request->mensaje;
	$name = $request->name;
 
	$to_email = "llanca872@gmail.com";
 
	$contact = "<p><strong>Name:</strong> $name</p>
				<p><strong>Email:</strong> $email</p>";
	$content = "<p><strong>Mensaje:</strong> $mensaje</p>";
 
	$email_subject = "Enviado desde la web";
 
	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';
 
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: $email\n";
	$headers .= "Reply-To: $email";
 
	mail($to_email,$email_subject,$email_body,$headers);
 
	$response_array['status'] = 'success';
	$response_array['from'] = $email;
	echo json_encode($response_array);
	echo json_encode($email);
	header($response_array);
	return $email;

?>
