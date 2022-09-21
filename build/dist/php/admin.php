<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    
    <link rel="icon" href="../icon/favi.ico">
    
    <title>portfolio_admin</title>
</head>
<body>

    <?
        include_once "db.php";
        $query = "select * from contect";
        $result = mysqli_query($db,$query);
    ?>

    
    <table>
        <thead>
            <tr>
                <th>name</th>
                <th>phone</th>
                <th>message</th>
            </tr>
        </thead>
        
        <tbody>

            <?
            while($row = mysqli_fetch_array($result)){
            ?>

            <tr>
                <td><?=$row['name']?></td>
                <td><?=$row['phone']?></td>
                <td><?=$row['msg']?></td>
            </tr>
            <? } ?>
        </tbody>
    </table>
    
    <style>
        table{
            border-collapse:collapse;
            margin: 0 auto;
            width:80%;
        }
        th {
            background: #ff9292;
            color: #fff;
            padding: 10px;
        }

        td {
            text-align: center;
            padding: 15px 0;
            border-bottom: 1px solid #ededed;
        }
    </style>
</body>
</html>