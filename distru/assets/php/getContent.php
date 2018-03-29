<?php 
	ini_set("display_errors", 1);
	require_once 'config.php';

	$mysqli = mysqli_connect(HOST, USER , PASSWORD, DATABASE) or die ("Ошибка подключения " . mysqli_connect_error());
	$data = json_decode(file_get_contents("php://input"));
	if (isset($_GET["table"])) {
		$table = $_GET["table"];
		if ($table === "catalog") {
			$query = "SELECT *, catalog.id, breakSystems.id as BSid, batteries.id as BTid, breakSystems.name AS breakSystem, batteries.name AS batteries FROM catalog INNER JOIN breakSystems ON catalog.breakSystem = breakSystems.id INNER JOIN batteries ON batteries.id = catalog.batteryType";
		}else{
			$query = "SELECT * FROM $table";
		}
	}elseif (isset($_GET["value"]) && !empty($_GET["value"])) {
		$value = $_GET["value"];
		$query = "SELECT * FROM catalog WHERE title LIKE '$value%' OR title LIKE '%$value%'";
	}elseif (isset($data)) {
		$filters = (array)$data;
		$query = "SELECT * FROM catalog WHERE 1 ";
		$CondParts = array();
		$CondPart = "";
		foreach ($filters as $key => $value) {
			if (empty($value)) {
				continue;
			}
			if (is_array($value)) {
				$condition = array();
				for ($i=0; $i < count($value); $i++) { 
					$part = "$key = " . $value[$i];
					array_push($condition, $part);
				}
				$concat = implode(' OR ', $condition);
				$CondPart .= $concat;
			}else{
				$CondPart .= "$key <= $value";
			}
			array_push($CondParts, $CondPart);
			$CondPart = "";
		}
		if (count($CondParts) > 0) {
			$EntCond = implode(' AND ', $CondParts);
			$query .= " AND $EntCond";
		}
	}
	$result = $mysqli->query($query) or die ("Error in '$query': " . mysqli_error($mysqli));
	$response = array();
	while ($row = $result->fetch_assoc()) {
		if (isset($row["image"])) {
			$row["image"] = base64_encode($row["image"]);
			$id = $row["id"];
			$previews = $mysqli->query("SELECT * FROM previews WHERE bike_id=$id");
			$row["previews"] = array();
			while($prev = $previews->fetch_assoc()){
				$image = base64_encode($prev["image"]);
				array_push($row["previews"], $image);
			}
		}
		array_push($response, $row);
	}
	echo json_encode($response);
?>