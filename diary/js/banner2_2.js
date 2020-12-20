jQuery(document).ready(function(){
	var current = 0;
	var banner = $('#wrapper li');
	var stop;
	var timer;
	
	function timer(){stop = setInterval (function(){
		var prev = banner.eq(current);
		move(prev,'0%','-100%');
		current++;
		if(current > 3) current = 0; //if(current == banner.size() size는 갯수
		var next = banner.eq(current);
		move(next,'100%','0%');
	},1000);};
	function move(tg,start,end){
		tg.css('left',start).stop().animate({left:end},{duration:500,ease:'easeOutCubic'});
		
	};
	timer();
	
	$("#wrapper li").hover(
	
		function(){ clearInterval(stop);
		
	},	function(){ 
		timer()
		
	});
	
});