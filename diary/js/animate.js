jQuery(document).ready(function(){
	$('.box_in .box').hover(
		function(){
			$('.box_in .box1>a').stop().animate({'margin-top': '-176px'},500);
			
		},
		
		function(){
			$(".box_in .box1>a").stop().animate({'margin-top': '0px'},500);
			
		})
});