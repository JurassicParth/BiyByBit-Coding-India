<?php
session_start();
include "db.php";

if (!isset($_SESSION['admin'])) {
    header("Location: admin_login.php");
    exit();
}

// Fetch users
$users = $conn->query("SELECT * FROM signup");

// Fetch feedback
$feedbacks = $conn->query("SELECT * FROM feedback");
?>

<!DOCTYPE html>
<html>
<head>
<title>Admin Dashboard</title>
<style>
body { font-family: Arial; padding: 20px; }
table { border-collapse: collapse; width: 100%; margin-bottom: 30px; }
table, th, td { border: 1px solid #ccc; }
th, td { padding: 10px; text-align: left; }
a { color: red; text-decoration: none; }
</style>
</head>

<body>

<h2>Admin Dashboard</h2>
<a href="logout.php">Logout</a>

<h3>Users</h3>
<table>
<tr>
<th>ID</th>
<th>Username</th>
<th>Email</th>
<th>Action</th>
</tr>

<?php while($row = $users->fetch_assoc()) { ?>
<tr>
<td><?php echo $row['id']; ?></td>
<td><?php echo $row['username']; ?></td>
<td><?php echo $row['email']; ?></td>
<td>
<a href="delete_user.php?id=<?php echo $row['id']; ?>">Delete</a>
</td>
</tr>
<?php } ?>
</table>

<h3>Feedback</h3>
<table>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Age</th>
<th>Phone</th>
<th>Message</th>
<th>Action</th>
</tr>

<?php while($row = $feedbacks->fetch_assoc()) { ?>
<tr>
<td><?php echo $row['id']; ?></td>
<td><?php echo $row['Name']; ?></td>
<td><?php echo $row['Email']; ?></td>
<td><?php echo $row['Age']; ?></td>
<td><?php echo $row['PhoneNo']; ?></td>
<td><?php echo $row['Message']; ?></td>
<td>
<a href="delete_feedback.php?id=<?php echo $row['id']; ?>">Delete</a>
</td>
</tr>
<?php } ?>
</table>

</body>
</html>
