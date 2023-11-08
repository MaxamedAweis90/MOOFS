<?php
if (isset($_POST['email'])) {
  // Get the email address submitted in the form
  $email = $_POST['email'];

  // Open a file for writing and append the email address to it
  $file = fopen("emails/vistors-emails.txt", "a");
  fwrite($file, $email . "\n");
  fclose($file);

  // Redirect the user to the thank you page
  header('Location: Register.html');
  exit;
}
?>