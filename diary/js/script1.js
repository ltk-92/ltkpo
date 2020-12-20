$(function(){
	$('.rollover').each(function(){
		var a = $(this);
//a = <a href="#" class="rollover"><img src="images/menu01_off.png" alt="Home"/></a>		
		var img = a.find('img');
//img = <img src="images/menu01_off.png" alt="Home"/>
		var src_off = img.attr('src');
		// src_off = images/menu01_off.png
		var src_on = src_off.replace('_off','_on');
		// src_on = images/menu01_on.png
		
		a.hover(
			function(){
				img.attr('src',src_on);
//<img src="images/menu01_on.png" alt="Home"/>				
			},
			function(){
				img.attr('src',src_off);
//<img src="images/menu01_off.png" alt="Home"/>						
			}
		);
	});
});
