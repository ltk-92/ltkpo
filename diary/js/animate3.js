jQuery(document).ready(function(){
	$('.banner li').each(function(){
		var box = $(this);
		box.hover(
			function(){
				box.find(' > a').stop().animate({'margin-left': '75px'},500);
			},
			function(){
				box.find(' > a').stop().animate({'margin-left': '0px'},500);
			}
		);
	}); 
	/*$('.banner li').each(function(){	
	
		$('.banner li').hover(
		
			function(){
				$(this).find("a").stop().animate({'margin-left': '75px'}, 500);
			},
			function(){
				$(this).find("a").stop().animate({'margin-left': '0px'}, 500);
				
			}
			
		);
	
	
	});*/
	
});