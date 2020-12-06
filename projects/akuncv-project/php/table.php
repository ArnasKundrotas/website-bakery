<?php    
    foreach($posts as $post){
        echo '<tr class="pro">'.'
        <td width="25"><div class="star"></div></td>
        <td width="50">'.$post['data'].'</td>
        <td width="240">'.$post['Pavadinimas'].'</td>
        <td class="kat-icon" width="30"><img class="responsive-img right" src="img/icons/'.$post['icon-code'].'.png"></td>
        <td width="400">'.$post['Kategorija'].'</td>
        <td width="65">'.$post['Plotas'].'m²</td>
        <td width="65">'.$post['Stadija'].'</td>
        <td width="80">'.$post['Tipas'].'</td>
        <td width="150">'.$post['Projekto_dalys'].'</td>
        <td width="100"><img class="responsive-img circle right" src="img/person-arnas-1.png" style="width:25px;"></td>
        <td width="100"><span class="blue-text">Arnas Kundrotas</span></td>
        <td width="100"><img class="responsive-img circle right" src="img/dots.png" style="width:25px;"></td>
        </tr>
        </tbody>
        <table>';
    }
