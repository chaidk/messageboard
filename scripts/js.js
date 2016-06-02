$(function(){
//note
var $note=$("div.note");
var $close=$("img#close");
$close.click(function(){
	$note.fadeOut(300);
});
//send
var $pub=$(".buttonPub");
var $pri=$(".buttonPri");
$pub.click(function(){
	$message.fadeIn(300);
});
$pri.click(function(){
	$message.fadeIn(300);
});

//message
var $message=$("div.message");
var $text=$("<div class='text'></div>");
var $h2="<h2></h2>";
var $p="<p></p>";


















})