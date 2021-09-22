<?php
$servername = "relouding.eu.mysql";
$username = "relouding_euwordpress";
$password = "c5Zv!sbB9BLJYZxfiBYc";

$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>