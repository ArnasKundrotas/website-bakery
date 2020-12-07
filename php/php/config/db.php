<?php
    // Variables
    $servername = "localhost";
    $username = "prktra_arnas";
    $password = "Nasrat383riko";
    $db_name = "prktra_akuncv";
    $charset = "utf8";

    $conn = mysqli_connect($servername, $username, $password, $db_name);

    mysqli_set_charset ($conn, $charset);

    if(mysqli_connect_errno()){
      echo 'Failed to connect to MySQL' . mysqli_connect_errno();
    }
