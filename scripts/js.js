$(function(){
//note
var $note=$("div.note");
var $close=$("img#close");
$close.click(function(){
	$note.fadeOut(300);
});
//message
var $message=$("div.message");
var $text=$("div.text");
getMessage();


// get
function getMessage(){
	$.getJSON("index.php",function(json){
		if(json.message.length > 0){
			// $("div.text").empty();
			$.each(json.message,function(){
				if(this['private']=='0'){
					$message.prepend("<div class='text'>"+'<h2>'+this['name']+'</h2>'+'<p>'+this['message']+'</p>'+'</div>');
					
				}
					// alert("!");
				// $("div.text").fadeIn(300);				
			});
			// $("div.text").each(function(){
			// 	// 

			// })
		}
	})
}
//send
var $pub=$(".buttonPub");
var $pri=$(".buttonPri");
$pub.click(function(){
	$message.fadeIn(300);
});
$pri.click(function(){
	$message.fadeIn(300);
});















})