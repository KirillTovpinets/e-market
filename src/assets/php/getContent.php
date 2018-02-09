<?php 
	ini_set("display_errors", 1);
	require_once 'config.php';

	$mysqli = mysqli_connect(HOST, USER , PASSWORD, DATABASE) or die ("Ошибка подключения " . mysqli_connect_error());

	$table = $_GET["table"];
	$query = "SELECT * FROM $table";
	$result = $mysqli->query($query) or die ("Error: " . mysqli_error($mysqli));
	$response = array();
	while ($row = $result->fetch_assoc()) {
		if (isset($row["image"])) {
			$row["image"] = base64_encode($row["image"]);
		}
		array_push($response, $row);
	}
	echo json_encode($response);
?>