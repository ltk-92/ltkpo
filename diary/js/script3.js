jQuery(document).ready(function(){
       var menu = $("#nav > li");
	   function open(){
					var df = $("#nav > li").eq(2);
					var onImg = df.find('.text_image > .on');
					var offImg = df.find('.text_image > .off');
					var menuImage = df.find('.menu_image');
					var imageHeight = menuImage.find('img').innerWidth();
					onImg.css('display','block');	
					offImg.css('display','none');	
					menuImage.animate({width:imageHeight},{duration:500, queue:false, easing:'easeOutCubic'});
				}
		function close(){	
					var df = $("#nav > li").eq(2);
					var onImg = df.find('.text_image > .on');
					var offImg = df.find('.text_image > .off');
					var menuImage = df.find('.menu_image');
					var imageHeight =0;
					onImg.css('display','none');	
					offImg.css('display','block');	
					menuImage.animate({width:imageHeight},{duration:500, queue:false, easing:'easeOutCubic'});
					
					
				};
	   
		open();
			
			menu.hover(
				function(){
					close();
					var tg = $(this);
					var onImg = tg.find('.text_image > .on');
					var offImg = tg.find('.text_image > .off');
					var menuImage = tg.find('.menu_image');
					var imageHeight = menuImage.find('img').innerWidth();
					onImg.css('display','block');	
					offImg.css('display','none');	
					
					
					menuImage.animate({width:imageHeight},{duration:500, queue:false, easing:'easeOutCubic'});
				},
				function(){	
					var tg = $(this);
					var onImg = tg.find('.text_image > .on');
					var offImg = tg.find('.text_image > .off');
					var menuImage = tg.find('.menu_image');
					var imageHeight =0;
					onImg.css('display','none');	
					offImg.css('display','block');	
					menuImage.animate({width:imageHeight},{duration:500, queue:false, easing:'easeOutCubic'});
					
					
				});
		
			
    });