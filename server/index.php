<?php



// db
	$query = "select name,message,private,date,ip from message";
	$result = db_connection($query);
	$message=array();
	while ($row = mysql_fetch_array($result,MYSQL_ASSOC)){
	// print_r ($row);
	array_push($message,array('name'=>$row['name'],'message'=>$row['message'],'private'=>$row['private'],'date'=>$row['date'],'ip'=>$row['ip']));
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