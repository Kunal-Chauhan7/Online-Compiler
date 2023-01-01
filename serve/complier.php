<?php
    $language = strtolower($_POST['language']);
    $code = $_POST['code'];

    $random = substr(md5(mt_rand()), 0, 7);
    $filepath = "/tempo/" . $random . "." . $language;
    $programFile = fopen($filepath , "w");
    fwrite($programFile , $code);
    fclose($programFile);
