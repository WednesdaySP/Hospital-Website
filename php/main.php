<?php 
$to = "admin_email@yoursite.com"; 
$subject = "My subject"; 
$txt = "Hello world!"; 
$headers = "From: webmaster@yoursite.com" . "\r\n" . 
"CC: somebodyelse@yoursite.com"; 
mail($to,$subject,$txt,$headers); 
?> 


<?php mail("admin_email@yoursite.com","My subject","Test Message"); ?>