<?
header("Content-type: text/html; charset=utf-8");

    include_once "db.php";

    

    $query = "create table portfolio(
        num int(11) auto_increment,
        name varchar(20),
        phone varchar(100),
        msg text,
        primary key(num)
    )";
    
    sql($query);

    $name = $_GET['name'];
    $phone = $_GET['phone'];
    $msg = $_GET['msg'];

    $query = "insert into portfolio(name,phone,msg) values('$name','$phone','$msg')";

    sql($query);

    echo "<script>
            alert('감사합니다.');
            location.href = '../contect.html';
        </script>";
?>
