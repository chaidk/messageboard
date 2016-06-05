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
					$message.prepend("<div class='text'>"+'<h2>'+this['name']+'&nbsp'+'</h2>'+'<span>'+this['date']+'</span>'+'&nbsp'+'<span>'+this['ip']+'</span>'+'<p>'+this['message']+'</p>'+'</div>');
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
// var $p1=$("#private1");
$pub.click(function(){
	$p0.attr("class","1");
	// $pub.css('background-color','#e43d3d');
	// $pri.css('background-color','gray');
	$pub.css('background-color','#E27575');
	$pri.css('background-color','gray');
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
	// $pub.css('background-color','#E27575');
	// $pri.css('background-color','#3e3e3e');
	$pub.css('background-color','gray');
	$pri.css('background-color','#E27575');
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



$sub.click(function(){
	var numError = $('form .onError').length;
	if(numError){
		return false;
	}
	var $data = $(".form :input").serializeArray();
	$.get("index.php",$data,function(json){
			if (json.status == "fail") {
				alert(json.message);
				return false;
			}
			if (json.status == "success") {
				$message.fadeIn(500);
				alert(json.message);
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
	$pub.css('background-color','#E27575');
	$pri.css('background-color','gray');
}














})