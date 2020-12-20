jQuery(document).ready(function(){
	$("button").click(function(){
		var html = $(this).html();
		var evalText = "$('div')." +html;
		eval(evalText);
		
	});
	
	setInterval(function(){
		$('div')
			.animate({left:'700px'},2000)
			.animate({left:'0px'},2000);
		
		
	},5000);
});



