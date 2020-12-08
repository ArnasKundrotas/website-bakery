<?php require('php/requirehttps.php'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />
    
    <style><?php include "css/main.css" ?></style>

    <title>krija | metalo konstrukcijos</title>
</head>
<body>
    <nav class="white">
        <div class="nav-wrapper">

            <ul class="left">
                <?php require('php/dashboard-left.php'); ?>
            </ul>

            <ul class="right">
                <?php require('php/dashboard-icons.php'); ?>
            </ul>
        </div>
    </nav>

</body>
</html>