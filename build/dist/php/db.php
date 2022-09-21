<?
   $db= mysqli_connect('localhost','yeah2114','sunny8083*','portfolio');

    function sql($query){
        global $db;
        mysqli_query($db,$query);
    }

?>
