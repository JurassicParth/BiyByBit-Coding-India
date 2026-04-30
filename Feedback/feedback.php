<?php
include "db.php";

$name = $_POST['name'];
$email = $_POST['email'];
$age = $_POST['age'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$stmt = $conn->prepare("INSERT INTO feedback (Name, Email, Age, PhoneNo, Message) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssiss", $name, $email, $age, $phone, $message);

if ($stmt->execute()) {
    echo "success";
} else {
    echo "error";
}
?>
