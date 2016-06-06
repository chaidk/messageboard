<?php

// time
	// echo date("m/d/y H:i:s");
//ip 
	// echo $_SERVER["REMOTE_ADDR"];

		$date = date("m/d/y H:i:s");
		$ip = $_SERVER["REMOTE_ADDR"];
// post
if($_GET){	
	if ($_GET['action'] == 'submit') {
	
		$name = htmlspecialchars($_GET['name']);
		$message = htmlspecialchars($_GET['message']);
		$private = htmlspecialchars($_GET['private']);
		// if(preg_match('/[^\w\s]/i', $name)) {
		// 	fail('Invalid name provided.');
		// }
		if( empty($name)) {
			fail('请输入昵称');
		exit;
		}
		if( empty($message) ) {
			fail('请输入留言');
		exit;
		}
		
		$query = "INSERT INTO message SET name='$name', message='$message', private='$private',date='$date',ip='$ip'";
		$result = db_connection($query);
		
		if ($result) {
			$msg = "评论成功！" ;
			success($msg);
		} else {
			fail('评论失败.');
		}
		exit;
	}
}

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

//count
	file_put_contents("server/count.txt", "$date , $ip<br>\r\n",FILE_APPEND);





?>