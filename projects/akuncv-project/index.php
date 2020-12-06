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
<?php
    require('php/config/db.php');

    $result = mysqli_query($conn, "SELECT * FROM projektai");

    $posts = mysqli_fetch_all($result, MYSQLI_ASSOC);

    mysqli_free_result($result);

    mysqli_close($conn);

?>

    <nav class="white">
        <div class="nav-wrapper">

            <ul class="left">
                <li>
                    <a href="#">
                        <img class="dash-icon" src="img/dash-icon-2.png">
                    </a>
                </li>

                <li><a href="#!">Dashboard</a></li>

                <li><a href="#!">Projects</a></li>
            </ul>

            <ul class="right">
                <li>
                    <a href="#">
                        <img class="avatar-icon circle" src="img/person-arnas-1.png">
                    </a>
                </li>
            </ul>
        </div>
    </nav>

    <section>


        <div class="col s12">

            <div class="card">
                <div class="card-content">
                    
                    <a href="#"><img class="reset" src="img/close-icon.png"></a>
                    <a href="#"><img class="no-reset" src="img/check.png"></a>

                    <a href="#" class="black-text"><span class="year selected" style="margin: 5px 5px;">2020</span></a> 
                    <a href="#" class="black-text"><span class="year" style="margin: 5px 5px;">2019</span></a> 
                    <a href="#" class="black-text"><span class="year" style="margin: 5px 5px;">2018</span></a> 
                    <a href="#" class="black-text"><span class="year" style="margin: 5px 5px;">2017</span></a> 
                    <a href="#" class="black-text"><span class="year" style="margin: 5px 5px;">2016</span></a> 
                    <a href="#" class="black-text"><span class="year" style="margin: 5px 5px;">2015</span></a> 

                    <table>
                        <thead>
                            <tr>
                                <th width="5"><div class="star"></div></th>
                                <th>Data</th>
                                <th>Pavadinimas</th>
                                <th></th>
                                <th>Kategorija</th>
                                <th>Plotas</th>
                                <th>Stadija</th>
                                <th></th>
                                <th>Projekto dalys</th>
                                <th></th>
                                <th>Projektuotojas</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                        <?php foreach($posts as $post): ?>
                            <tr class="pro">
                                <td width="5"><div class="star"></div></td>
                                <td width="30"><?php echo $post['data'] ?></td>
                                <td width="150"><?php echo $post['Pavadinimas'] ?></td>
                                <td class="kat-icon" width="25"><img class="responsive-img right" src="img/icons/<?php echo $post['icon-code'] ?>.png"></td>
                                <td width="250"><?php echo $post['Kategorija'] ?></td>
                                <td width="40"><?php echo $post['Plotas'] ?> m²</td>
                                <td width="30"><?php echo $post['Stadija'] ?></td>
                                <td width="50"><?php echo $post['Tipas'] ?></td>
                                <td width="40"><?php echo $post['Projekto_dalys'] ?></td>
                                <td width="70"><img class="responsive-img circle right" src="img/person-arnas-1.png" style="width:25px;"></td>
                                <td width="70"><span class="blue-text">Arnas Kundrotas</span></td>
                                <td width="70"><img class="responsive-img circle right" src="img/dots.png" style="width:25px;"></td>
                            </tr>
                        <?php endforeach; ?>

                        </tbody>
                    </table>
                </div>

            </div>

        </div>


    </section>

    <script src="js/js.js"></script>
</body>
</html>