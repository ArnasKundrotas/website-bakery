<?php
    require('config/db.php');

    $result = mysqli_query($conn, "SELECT * FROM projektai");
    $posts = mysqli_fetch_all($result, MYSQLI_ASSOC);
    mysqli_free_result($result);
    mysqli_close($conn);
    // var_dump($posts);

    require('table.php');
?>