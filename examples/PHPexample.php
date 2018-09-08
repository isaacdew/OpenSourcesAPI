<?php

function myOpenSourcesAPI($domains) {
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, 'http://localhost:3000/sources?domains=' . $domains);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

    curl_setopt($ch, CURLOPT_HEADER, 0);

    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));

    $API_output = curl_exec($ch);

    curl_close($ch);
	
    //This is for testing output
    //echo $API_output;

    $API_output = json_decode($API_output, true);

    return $API_output;
}

if($_GET) {
    $domain = $_GET['url'];

    $domain = json_encode(explode(', ', $domain));
    
    myOpenSourcesAPI($domain);
}
?>
<html>
    <body>
        <form action="PHPexample.php" method="get">
            <input type="text" name="url" placeholder="example.com, another.com, etc."/>
            <button>GO!</button>
        </form>
    </body>
</html>

