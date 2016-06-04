$(function(){
// note
var $note=$("div.note");
var $close=$("img#close");
$close.click(function(){
	$note.fadeOut(300);
});
// message
getMessage();
var $message=$("div.message");
var $text=$("div.text");


// get
function getMessage(){
	$.getJSON("index.php",function(json){
		if(json.message.length > 0){
			$("div.message").empty();
			$.each(json.message,function(){
				if(this['private']=='0'){
					$message.prepend("<div class='text'>"+'<h2>'+this['name']+'</h2>'+'<p>'+this['message']+'</p>'+'</div>');
				}
			
			});
		}
	})
}

// submit
var $pub=$(".buttonPub");
var $pri=$(".buttonPri");
var $sub=$("#submit");
var $p0=$("#private0");
var $p1=$("#private1");
$pub.click(function(){
	$p0.attr("class","1");
// 	$message.fadeIn(500);
// 	var $data = $(".form :input").serializeArray();
// 	$.get("index.php",$data,function(json){
// 			if (json.status == "fail") {
// 				// alert(json.message);
// 			}
// 			if (json.status == "success") {
// 				// alert(json.message);
// 				clearInputs();
// 			$("div.text").css({top:'+=100px'});	
// 				setTimeout(function(){getMessage()},200);
// 			}		
// 	}, "json");
// 	return false;
});
$pri.click(function(){
	$p0.attr("class","0");
// 	$message.fadeIn(500);
// 	var $data = $(".form :input").serializeArray();
// 	$.get("index.php",$data,function(json){
// 			if (json.status == "fail") {
// 				// alert(json.message);
// 			}
// 			if (json.status == "success") {
// 				// alert(json.message);
// 				clearInputs();
// 			if ($data.private=='0'){
// 			$("div.text").css({top:'+=100px'});	
// 			}
// 			setTimeout(function(){getMessage()},200);
// 			}		
// 	}, "json");
// 	return false;
});

var $select=$("input[type=radio][checked]").val();
$sub.click(function(){
	alert($p0.attr("class"));
	$message.fadeIn(500);
	var $data = $(".form :input").serializeArray();
	$.get("index.php",$data,function(json){
			if (json.status == "fail") {
				// alert(json.message);
			}
			if (json.status == "success") {
				// alert(json.message);
				clearInputs();
			if ($p0.attr("class")=="1"){
			$("div.text").css({top:'+=100px'});	
			};
			setTimeout(function(){getMessage()},200);
			}		
	}, "json");
	return false;
});

function clearInputs(){
	$("#name").val('');
	$("#message").val('');
}

// validate














})