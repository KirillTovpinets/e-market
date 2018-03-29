<?php 
	ini_set("display_errors", 1);
	require_once 'config.php';
	$data = json_decode($_POST["newBike"]);
	$target_file = file_get_contents($_FILES["selectFile"]["tmp_name"]);
	$previews = array();
	foreach ($_FILES as $key => $value) {
		if ($key !== "selectFile") {
			$preview = file_get_contents($_FILES[$key]["tmp_name"]);
			array_push($previews, $preview);
		}
	}
	$title = $data->_title;
	$lifeVPrice = $data->_lifeVPrice;
	$powerVPrice = $data->_powerVPrice;
	$size_width = $data->_size->_width;
	$size_height = $data->_size->_height;
	$size_length = $data->_size->_length;
	$size_wheels = $data->_size->_wheels;
	$size_sitHeight = $data->_size->_sitHeight;
	$size_clearance = $data->_size->_clearance;

	$breakSystem = $data->_breakSystem;
	$maxSpeed = $data->_maxSpeed;
	$maxWayLength = $data->_maxWayLength;
	$weight = $data->_weight;
	$motor = $data->_motor;
	$batteryV = $data->_batteryV;
	$batteryA = $data->_batteryA;
	$batteryCharging = $data->_batteryCharging;
	$maxLoad = $data->_maxLoad;

	$mysqli = mysqli_connect(HOST, USER, PASSWORD, DATABASE) or die ("Ошибка подключения: " . mysqli_connect_error());
	$image = mysqli_real_escape_string($mysqli, $target_file);

	$previewImgs = array();
	for ($i=0; $i < count($previews); $i++) { 
		$img = mysqli_real_escape_string($mysqli, $previews[$i]);
		array_push($previewImgs, $img);
	}
	$mysqli->query("SET NAMES utf8");
	$insertBike = "INSERT INTO catalog(title, lifeVPrice, powerVPrice, width, height, length, wheels, sitHeight, clearance, breakSystem, maxSpeed, maxWayLength, weight, motor, batteryV, batteryA, batteryCharging, maxLoad, image) VALUES (
		'$title',
		'$lifeVPrice',
		'$powerVPrice',
		'$size_width',
		'$size_height',
		'$size_length',
		'$size_wheels',
		'$size_sitHeight',
		'$size_clearance',
		'$breakSystem',
		'$maxSpeed',
		'$maxWayLength',
		'$weight',
		'$motor',
		'$batteryV',
		'$batteryA',
		'$batteryCharging',
		'$maxLoad',
		'$image')";
	$mysqli->query($insertBike) or die("Error in '$insertBike': " . mysqli_error($mysqli));

	$newBike = $mysqli->query("SELECT MAX(id) AS id FROM catalog");
	$newBikeArr = $newBike->fetch_assoc();
	$newId = $newBikeArr["id"];

	for ($i=0; $i < count($previewImgs); $i++) { 
		$prev = $previewImgs[$i];
		$insertImg = "INSERT INTO previews(bike_id, image) VALUES ($newId, '$prev')";
		$mysqli->query($insertImg) or die ("Error in '$insertImg': " . mysqli_error($mysqli));
	}

	mysqli_close($mysqli);
	echo "Скутер успешно добавлен";
?>