<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    // Simple admin credentials (change this)
    if ($user === "admin" && $pass === "admin123") {
        $_SESSION['admin'] = true;
        header("Location: admin_dashboard.php");
        exit();
    } else {
        $error = "Invalid admin credentials";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
<title>Admin Login</title>
</head>
<body>

<h2>Admin Login</h2>

<form method="POST">
    <input type="text" name="username" placeholder="Username" required><br><br>
    <input type="password" name="password" placeholder="Password" required><br><br>
    <button type="submit">Login</button>
</form>

<p style="color:red;"><?php if(isset($error)) echo $error; ?></p>

</body>
</html>
