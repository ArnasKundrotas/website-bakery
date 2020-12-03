<?php
    // Variables
    $db_localhost = "akuncv.lt";
    $db_usernamas = "prkta_arnas";
    $db_password = "Nasrat383riko";
    $db_name = 'prktra_akuncv';

    // Create Connection
    $conn = mysqli_connect($db_localhost, $db_username, $db_password, $db_name);

    // Check connection
    if(mysqli_connect_errno()){
        //connection failed
        echo 'failed to connect to mysql' . mysqli_connect_errno;
    }