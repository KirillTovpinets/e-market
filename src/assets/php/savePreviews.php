<?php 
	ini_set("display_errors", 1);
	require_once 'config.php';
	$previews = array();
	$bikeId = $_POST["bike_id"];
	foreach ($_FILES as $key => $value) {
		$preview = file_get_contents($_FILES[$key]["tmp_name"]);
		array_push($previews, $preview);
	}

	$mysqli = mysqli_connect(HOST, USER, PASSWORD, DATABASE) or die ("Ошибка подключения: " . mysqli_connect_error());

	$previewImgs = array();
	for ($i=0; $i < count($previews); $i++) { 
		$img = mysqli_real_escape_string($mysqli, $previews[$i]);
		array_push($previewImgs, $img);
	}
	$mysqli->query("SET NAMES utf8");

	for ($i=0; $i < count($previewImgs); $i++) { 
		$prev = $previewImgs[$i];
		$insertImg = "INSERT INTO previews(bike_id, image) VALUES ($bikeId, '$prev')";
		$mysqli->query($insertImg) or die ("Error in '$insertImg': " . mysqli_error($mysqli));
	}

	mysqli_close($mysqli);
	echo "Скутер успешно добавлен";
?>