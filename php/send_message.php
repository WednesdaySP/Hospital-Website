<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Compose email message
    $to = "snehamathur012@gmail.com"; // Change this to your company's email address
    $subject = "New message from website contact form";
    $message_body = "Full Name: $full_name\n";
    $message_body .= "Email: $email\n";
    $message_body .= "Phone: $tel\n";
    $message_body .= "Subject: $subject\n\n";
    $message_body .= "Message:\n$message";

    // Send email
    if (mail($to, $subject, $message_body)) {
        echo "Message sent successfully.";
    } else {
        echo "Failed to send message.";
    }
} else {
    // Handle invalid request method
    echo "Invalid request method.";
}
?>
