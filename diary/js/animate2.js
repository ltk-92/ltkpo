jQuery(document).ready(function(){
	
	var imgBoxs = $(".box").find("div");
	
	imgBoxs.each(function(){
		
		var imgBox = $(this);
		var ele = imgBox.find("a");
		
		imgBox.hover(
		function(){
			ele.stop().animate({'margin-top': '-294px'},500);
			
		},
		
		function(){
			ele.stop().animate({'margin-top': '0px'},500);
			
		});
		
	});
	
	
	
	
	
});