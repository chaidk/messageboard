$(function(){
getMessage();
var $message=$("div.message");
var $text=$("div.text");


// get
function getMessage(){
	$.getJSON("index.php",function(json){
		if(json.message.length > 0){
			$("div.message").empty();
			$.each(json.message,function(){
				if(this['private']=='1'){
					$message.prepend("<div class='text'>"+"私密"+'<h2>'+this['name']+'&nbsp'+'</h2>'+'<span>'+this['date']+'</span>'+'&nbsp'+'<span>'+this['ip']+'</span>'+'<p>'+this['message']+'</p>'+'</div>');
				}
				if(this['private']=='0'){
					$message.prepend("<div class='text'>"+"公开"+'<h2>'+this['name']+'&nbsp'+'</h2>'+'<span>'+this['date']+'</span>'+'&nbsp'+'<span>'+this['ip']+'</span>'+'<p>'+this['message']+'</p>'+'</div>');
				}
			
			});
		}
	})
}

// submit
$("#submit").click(function(){
	getMessage();
	return false;
});












})