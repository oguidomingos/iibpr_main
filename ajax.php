<?php
// subscribe form code start
if($_REQUEST['ftype']=='comingsoon'):
	if($_REQUEST['email']):
		$to = '';
		$subject = 'Subscribed';
		$message = 'Email:'.$_REQUEST['name'].'<br/>';		
		$headers = '' . "\r\n" .
					   'X-Mailer: PHP/' . phpversion();
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		mail($to, $subject, $message, $headers);
		
		echo '1|<div class="alert-success p-2 px-3 mt-2">You are Subscribed Now.</div>';
	else:
		echo '0|<div class="alert-danger p-2 px-3 mt-2">Please enter email address!</div>';
	endif;
endif;

// contact form code start
if($_REQUEST['ftype']=='contact-us'):
	if($_REQUEST['fname'] && $_REQUEST['lname'] && $_REQUEST['email'] && $_REQUEST['phone'] && $_REQUEST['message']):
		$to = '';
		$subject = 'Contact Enquiry';
		$message = 'First Name:'.$_REQUEST['fname'].'<br/>';		
		$message .= 'Last Name:'.$_REQUEST['lname'].'<br/>';		
		$message .= 'Email:'.$_REQUEST['email'].'<br/>';		
		$message .= 'Phone:'.$_REQUEST['phone'].'<br/>';		
		$message .= 'Message:'.$_REQUEST['message'].'<br/>';		
		$headers = '' . "\r\n" .
					   'X-Mailer: PHP/' . phpversion();
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		mail($to, $subject, $message, $headers);
		
		echo '1|<div class="alert-success p-2 px-3 mt-2">Enquiry submitted successfully, we will back to you soon.</div>';
	else:
		echo '0|<div class="alert-danger p-2 px-3 mt-2">Please fill form to submit your Enquiry !</div>';
	endif;
endif;

// contact form code start
if($_REQUEST['ftype']=='contact-us1'):
	if($_REQUEST['email1'] && $_REQUEST['phone1'] && $_REQUEST['msg1']):
		$to = '';
		$subject = 'Contact Enquiry';
		$message = 'Email:'.$_REQUEST['email1'].'<br/>';		
		$message .= 'Phone:'.$_REQUEST['phone1'].'<br/>';		
		$message .= 'Message:'.$_REQUEST['msg1'].'<br/>';		
		$headers = '' . "\r\n" .
					   'X-Mailer: PHP/' . phpversion();
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		mail($to, $subject, $message, $headers);
		
		echo '1|<div class="alert-success p-2 px-3 mt-2">Enquiry submitted successfully, we will back to you soon.</div>';
	else:
		echo '0|<div class="alert-danger p-2 px-3 mt-2">Please fill form to submit your Enquiry !</div>';
	endif;
endif;


// contact form code start
if($_REQUEST['ftype']=='contact-us2'):
	if($_REQUEST['name2'] && $_REQUEST['email2'] && $_REQUEST['subject2'] && $_REQUEST['msg2']):
		$to = '';
		$subject = 'Contact Enquiry';
		$message = 'Name:'.$_REQUEST['name2'].'<br/>';		
		$message = 'Email:'.$_REQUEST['email2'].'<br/>';		
		$message .= 'Subject:'.$_REQUEST['subject2'].'<br/>';		
		$message .= 'Message:'.$_REQUEST['msg2'].'<br/>';		
		$headers = '' . "\r\n" .
					   'X-Mailer: PHP/' . phpversion();
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		mail($to, $subject, $message, $headers);
		
		echo '1|<div class="alert-success p-2 px-3 mt-2">Enquiry submitted successfully, we will back to you soon.</div>';
	else:
		echo '0|<div class="alert-danger p-2 px-3 mt-2">Please fill form to submit your Enquiry !</div>';
	endif;
endif;

// comment form code start
if($_REQUEST['ftype']=='comment-form1'):
	if($_REQUEST['cmnt3'] && $_REQUEST['name3'] && $_REQUEST['email3']):
		$to = '';
		$subject = 'Comment Added';
		$message = 'Comment:'.$_REQUEST['cmnt3'].'<br/>';		
		$message = 'Name:'.$_REQUEST['name3'].'<br/>';		
		$message .= 'Email:'.$_REQUEST['email3'].'<br/>';	
		$headers = '' . "\r\n" .
					   'X-Mailer: PHP/' . phpversion();
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		mail($to, $subject, $message, $headers);
		
		echo '1|<div class="alert-success p-2 px-3 mt-2">Comment submitted successfully.</div>';
	else:
		echo '0|<div class="alert-danger p-2 px-3 mt-2">Please fill form to add your Comment !</div>';
	endif;
endif;