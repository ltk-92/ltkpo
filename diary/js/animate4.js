jQuery(document).ready(function(){
	/*$('.banner li').each(function(){
		var box = $(this);
		box.hover(
			function(){
				box.find(' > a').stop().animate({'margin-left': '75px'},500);
			},
			function(){
				box.find(' > a').stop().animate({'margin-left': '0px'},500);
			}
		);
	});*/


	var box = $(".sub_list").find("div");
	box.each(function(){
			var imgBox = $(this);
			var img = imgBox.find("img");
	
		 $(imgBox).hover(
			function(){
				img.stop().animate({'margin-top': '-97px'},500);
			},
			function(){
				img.stop().animate({'margin-top': '0px'},500);
			}
		); 
	
	})
});
