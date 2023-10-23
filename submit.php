<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  
  // Set recipient email
  $to = "support@sprenger.xyz";
  
  // Additional headers
  $headers = "From: " . $email;
  
  // Send email
  mail($to, $subject, $message, $headers);
}
?>
