<?php require('php/requirehttps.php'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />
    
    <style><?php include "css/main.css" ?></style>

    <title>Arnas Kundrotas | CV</title>
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

    <section>


        <div class="col s12">

            <div class="card">
                
                <div class="card-content">
                    
                    <a href="#"><img class="reset" src="img/close-icon.png"></a>
                    <a class="no-reset" href="#">ALL</a>

                    <a href="#" class="black-text"><span class="year" style="margin: 5px 5px;">2020</span></a> 
                    <a href="#" class="black-text"><span class="year" style="margin: 5px 5px;">2019</span></a> 
                    <a href="#" class="black-text"><span class="year" style="margin: 5px 5px;">2018</span></a> 
                    <a href="#" class="black-text"><span class="year" style="margin: 5px 5px;">2017</span></a> 
                    <a href="#" class="black-text"><span class="year" style="margin: 5px 5px;">2016</span></a> 
                    <a href="#" class="black-text"><span class="year" style="margin: 5px 5px;">2015</span></a> 
                    
                    <table>
                        <thead>
                            <th width="25"><div class="star"></div></th>
                            <th width="50">Data</th>
                            <th width="240">Pavadinimas</th>
                            <th width="30"></th>
                            <th width="400">Kategorija</th>
                            <th width="65">Plotas</th>
                            <th width="65">Stadija</th>
                            <th width="80"></th>
                            <th width="150">Projekto dalys</th>
                            <th width="100"></th>
                            <th width="100">Projektuotojas</th>
                            <th width="100"></th>
                        </thead>
                        <tbody id="content">

                        </tbody>
                    </table>
                </div>

            </div>

        </div>


    </section>

    <script src="js/js.js"></script>
</body>
</html>