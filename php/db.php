<?
   $db= mysqli_connect('localhost','root','1234','portfolio');

    function sql($query){
        global $db;
        mysqli_query($db,$query);
    }

?>
