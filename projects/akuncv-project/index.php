<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />
    
    <link rel="stylesheet" href="css/main.css">

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

            <ul>
                <li><a href="#" class="icon"><img src="img/dash-icon-1.png"></a></li>

                    <ul id="my-dropdown" class="dropdown-content">
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                    </ul>

                <li><a href="#!">Dashboard</a></li>

                <li><a href="#">Projects</a> </li>
            </ul>

            <ul class="right">
                <li><a href="#"><i class="fas fa-bell"></i></a></li>
                <li><a href="#"><i class="fas fa-question-circle"></i></a> </li>
                <li><a class="icon" href="#"><img class="circle" src="img/person-arnas-1.png" alt=""></i></a></li>
            </ul>
        </div>
    </nav>

    <section id="projects">
        <div class="row">
            <div class="col s12">
                    <div class="card">
                        <div class="card-content">

                            <a href="#"><img class="reset" src="img/close-icon.png"></a>
                            <a href="#"><span style="margin: 5px 5px;"><img class="no-reset" src="img/check.png"></span></a>

                            <a href="#" class="black-text"><span class="year" style="margin: 5px 5px;">2020</span></a> 
                            <a href="#" class="black-text"><span class="year" style="margin: 5px 5px;">2019</span></a> 
                            <a href="#" class="black-text"><span class="year" style="margin: 5px 5px;">2018</span></a> 
                            <a href="#" class="black-text"><span class="year" style="margin: 5px 5px;">2017</span></a> 
                            <a href="#" class="black-text"><span class="year" style="margin: 5px 5px;">2016</span></a> 
                            <a href="#" class="black-text"><span class="year" style="margin: 5px 5px;">2015</span></a> 

                        </div>
                    </div>
            </div>
        </div>
    </section>

    <section>

            <div class="row">

                <div class="col s12">

                    <div class="card">
                        <div class="card-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Pavadinimas</th>
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
                                        <td width="30"><?php echo $post['data'] ?></td>
                                        <td width="100"><?php echo $post['Pavadinimas'] ?></td>
                                        <td width="200"><?php echo $post['Kategorija'] ?></td>
                                        <td width="20"><?php echo $post['Plotas'] ?> m²</td>
                                        <td width="10"><?php echo $post['Stadija'] ?></td>
                                        <td width="50"><span class="tipas right green-text"><?php echo $post['Tipas'] ?></span></td>
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

            </div>

    </section>

    <script src="js/js.js"></script>
</body>
</html>