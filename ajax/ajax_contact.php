<?php 
if($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
  require_once 'class.phpmailer.php';
  $mail = new PHPMailer(true);

    $name=$_REQUEST['name'];
    $email_address=$_REQUEST['email_address'];
    $your_message=$_REQUEST['your_message'];

    $defaultmail = 'mdroky01789@gmail.com';

    if( $_REQUEST['email']!="" ) {
    	  $address_from_mail = $_REQUEST['email'];
    	} else {
    	  $address_from_mail = $defaultmail;
    }


    $main_message='<table width="90%"  border="0" cellspacing="0" cellpadding="0" style="font-size: 14px; font-family: Arial, Helvetica, sans-serif; ">
      <tr align="left" valign="top">
        <td height="20" colspan="2">Query from Online Contact Form!</td>
      </tr>
      <tr align="left" valign="top">
        <td height="20" colspan="2">&nbsp;</td>
      </tr>
      <tr align="left" valign="top">
        <td height="20" colspan="2">------------------------------------------</td>
      </tr>
      <tr align="left" valign="top">
        <td height="20"><strong>Contact Name:</strong> </td>
        <td height="20">'.$name.'</td>
      </tr>
      <tr align="left" valign="top">
        <td height="20"><strong>Email Address:</strong> </td>
        <td height="20">'.$email_address.'</td>
      </tr>
      <tr align="left" valign="top">
        <td height="20"><strong>Your Message:</strong> </td>
        <td height="20">'.$your_message.'</td>
      </tr>  
    </table>';

   // $mail->MsgHTML($main_message);
   // $mail->AddAttachment('images/phpmailer.gif');      // attachment
   // $mail->AddAttachment('images/phpmailer_mini.gif'); // attachment

  $mail->From       = $address_from_mail;
  $mail->FromName   = $email;
  $mail->Subject    = "Newsletter request posted on Natural HEALTH SHOP";
  $mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test
  $mail->MsgHTML($main_message);
  $mail->AddAddress($defaultmail, "nhs");

  //$mail->AddAttachment("images/phpmailer.gif");             // attachment

  if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
  } else {
    echo "Message sent!";
  }

} else {
  echo "Restricted access";
}

?>
