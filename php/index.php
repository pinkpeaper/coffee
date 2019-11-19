<?php
	$hide=$_GET["hide"];
	$conn=mysqli_connect("127.0.0.1","root","","coffee",3306);
	mysqli_query($conn,"SET NAMES UTF8");
	if($hide==0){
		$sql="SELECT * FROM coffeeindex ORDER BY id DESC LIMIT 3";
	}
	if($hide==1){
		$sql="SELECT * FROM peopleindex ORDER BY id DESC LIMIT 4";
	}
	if($hide==2){
		$sql="SELECT * FROM news_sanji ORDER BY id DESC LIMIT 5";
	}
	$result=mysqli_query($conn,$sql);
	$arr=[];
	while(($row=mysqli_fetch_row($result))!=null){
		Array_push($arr,$row);
	}
	echo JSON_encode($arr);
?>