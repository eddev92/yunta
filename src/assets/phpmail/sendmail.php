<?php

$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
 
	$email = $request->email;
	$telefono = $request->telefono;
	$mensaje = $request->mensaje;
	$name = $request->name;
 
	$to_email = "contactos@3vu.pe";
 
	$contact = "<p><strong>Name:</strong> $name</p>
				<p><strong>Email:</strong> $email</p>";
	$content = "<p><strong>Telefono:</strong> $telefono</p>
				<p><strong>Mensaje:</strong> $mensaje</p>";
 
	$email_subject = "Enviado desde la web 3vu";
 
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
