<?php
    require('config/db.php');

    $result = mysqli_query($conn, "SELECT * FROM projektai WHERE data='2019'");
    $posts = mysqli_fetch_all($result, MYSQLI_ASSOC);
    mysqli_free_result($result);
    mysqli_close($conn);
    // var_dump($posts);

    require('projects.php');
?>