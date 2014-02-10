<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dojo XHR with FormData</title>
</head>
<body>
    <form action="server.php" id="f" enctype="multipart/form-data">
        <input type="text" name="name" placeholder="name" value="Eduardo">
        <input type="text" name="age" placeholder="age" value="27">
        <input type="file" name="photo">
        <input type="submit" value="Send!">
    </form>

    <script src="bower_components/dojo/dojo.js"></script>
    <script src="js/script-dojo.js"></script>
</body>
</html>