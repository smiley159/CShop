

<?php 
require_once 'config.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

@$task = $request->task;


if($task=='getProduct'){

	$shopId = $request->shopId;	

		$result = $conn->query(
		"SELECT * FROM product;"
		);
		$response = array();

		while($pro = $result->fetch_array(MYSQLI_ASSOC)){
			array_push($response, $pro);
		}

		echo json_encode($response);
		
		
}





$conn->close();

?>