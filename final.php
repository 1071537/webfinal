<?php
error_reporting(0);
mysqli_query( "SET NAME ‘UTF8′");
mysqli_query( "SET CHARACTER_SET_CLIENT='utf8'");
mysqli_query( "SET CHARACTER_SET_RESULTS='utf8'");
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$number=$_POST['number'];
$category=$_POST['category'];
$quote = $_POST['pictureNum'];


echo $name.' '.$email.' '.$phone.' '.$number.' '.$category.' '.$quote;

$conn = new mysqli("localhost","root","nofulai0626","final");

if($conn->connect_error){
	die("Connection failed: ".$conn->connect_error);
}

$sql="INSERT INTO booking(name,email,phone,productType,number,quoteType)VALUES('$name', '$email','$phone','$category','$number','$quote')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
header("Location: http://127.0.0.1:8443/web final/index.html");
exit;/**/
?>