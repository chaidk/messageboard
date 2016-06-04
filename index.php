<?php

// time
	// echo date("m/d/y h:m:s");
// post
if($_GET){	
	if ($_GET['action'] == 'submit') {
	
		$name = htmlspecialchars($_GET['name']);
		$message = htmlspecialchars($_GET['message']);
		$private = htmlspecialchars($_GET['private']);

		// if(preg_match('/[^\w\s]/i', $fname) || preg_match('/[^\w\s]/i', $lname)) {
		// 	fail('Invalid name provided.');
		// }
		// if( empty($fname) || empty($lname) ) {
		// 	fail('Please enter a first and last name.');
		// }
		// if( empty($gender) ) {
		// 	fail('Please select a gender.');
		// }
		// if( empty($minutes) || empty($seconds) ) {
		// 	fail('Please enter minutes and seconds.');
		// }
		
		$query = "INSERT INTO message SET name='$name', message='$message', private='$private'";
		$result = db_connection($query);
		
		if ($result) {
			$msg = "name: ".$name." added successfully" ;
			success($msg);
		} else {
			fail('Insert failed.');
		}
		exit;
	}
}

// db
	$query = "select name,message,private from message";
	$result = db_connection($query);
	$message=array();
	while ($row = mysql_fetch_array($result,MYSQL_ASSOC)){
	// print_r ($row);
	array_push($message,array('name'=>$row['name'],'message'=>$row['message'],'private'=>$row['private']));
	}
	echo json_encode(array("message"=>$message));
	function db_connection($query){
	mysql_connect('127.0.0.1','root','qwqw1212')OR die('Could not connect to database.');
	mysql_select_db('message_board');
	return mysql_query($query);
	}
		function fail($message) {
		die(json_encode(array('status' => 'fail', 'message' => $message)));
	}
	function success($message) {
		die(json_encode(array('status' => 'success', 'message' => $message)));
	}

?>