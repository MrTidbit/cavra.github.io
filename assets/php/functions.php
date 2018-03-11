<?php
if (isset($_POST['email-form'])) {
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    if (empty($name) || empty($visitor_email) || empty($message)) {
        echo "You are missing a field!";
        exit;
    }
    else if (IsInjected($visitor_email)) {
        echo "Bad email value!";
        exit;
    }
    else {
        $email_from = 'coryavra@gmail.com';
        $email_subject = "New Form Submission";
        $email_body = "You have received a new message from the user $name.\n".
            "Here is the message:\n $message".

        $to = "coryavra@gmail.com";
        $headers = "From: $email_from \r\n";
        $headers .= "Reply-To: $visitor_email \r\n";

        mail($to, $email_subject, $email_body, $headers);

        echo "Message Sent!";
        exit;
    }
}

// Function to validate against any email injection attempts
function IsInjected($str) {
    $injections = array('(\n+)', '(\r+)', '(\t+)', '(%0A+)', '(%0D+)', '(%08+)', '(%09+)');
    $inject = join('|', $injections);
    $inject = "/$inject/i";

    if (preg_match($inject,$str)) {
        return true;
    }
    else {
        return false;
    }
}

?>
