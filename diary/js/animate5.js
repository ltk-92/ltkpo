jQuery(document).ready(function(){
	$('.quick_icon > li').hover(
		function(){
			var num = $(this).index()+1;
			$(this).find('>a>img').attr({'src':'image/quick_on_0'+num+'.png'});
		},
		function(){
			var num = $(this).index()+1;
			$(this).find('>a>img').attr({'src':'image/quick_0'+num+'.png'});
			
		}
	)
	
	 bb = true;
	$('.quick_toggle').click(function(){
		if(bb){
			
			$(this).addClass("quick_open");
			$(this).stop().animate({'marginRight' : '-70px'},500);
			$(".quickmenu").stop().animate({'marginRight' : '-70px'},500,function(){bb=false;});
			
		}else{ 
	
				$(this).addClass("quick_toggle");
				$(this).removeClass("quick_open");
				$(this).stop().animate({'marginRight' : '0px'},500);
				$(".quickmenu").stop().animate({'marginRight' : '0px'},500,function(){bb=true;});	
				
			
		}
			
	});
	
	
});
