<?php    
    require('table-header.php');
    foreach($posts as $post){
        echo '  <tr class="pro">'.'
                <td width="5"><div class="star"></div></td>
                <td width="30">'.$post['data'].'</td>
                <td width="150">'.$post['Pavadinimas'].'</td>
                <td class="kat-icon" width="25"><img class="responsive-img right" src="img/icons/'.$post['icon-code'].'.png"></td>
                <td width="250">'.$post['Kategorija'].'</td>
                <td width="40">'.$post['Plotas'].'m²</td>
                <td width="30">'.$post['Stadija'].'</td>
                <td width="50">'.$post['Tipas'].'</td>
                <td width="40">'.$post['Projekto_dalys'].'</td>
                <td width="70"><img class="responsive-img circle right" src="img/person-arnas-1.png" style="width:25px;"></td>
                <td width="70"><span class="blue-text">Arnas Kundrotas</span></td>
                <td width="70"><img class="responsive-img circle right" src="img/dots.png" style="width:25px;"></td>
                </tr>
            </tbody>
        <tabe>';
    }
?>