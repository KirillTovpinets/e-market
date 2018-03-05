<?php 
	ini_set("display_errors", 1);
	require_once 'config.php';

	$mysqli = mysqli_connect(HOST, USER , PASSWORD, DATABASE) or die ("Ошибка подключения " . mysqli_connect_error());

	if (isset($_GET["table"])) {
		$table = $_GET["table"];
		$query = "SELECT * FROM $table";
	}elseif (isset($_GET["value"]) && !empty($_GET["value"])) {
		$value = $_GET["value"];
		$query = "SELECT * FROM catalog WHERE title LIKE '$value%' OR title LIKE '%$value%'";
	}
	$result = $mysqli->query($query) or die ("Error in '$query': " . mysqli_error($mysqli));
	$response = array();
	while ($row = $result->fetch_assoc()) {
		if (isset($row["image"])) {
			$row["image"] = base64_encode($row["image"]);
		}
		array_push($response, $row);
	}
	echo json_encode($response);
?>