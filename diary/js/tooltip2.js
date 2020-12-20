jQuery(document).ready(function(){
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	function updateBalloonPosition(x, y){
		balloon.css({left:x+15, top:y});
	};
	
	function showBalloon(){
		balloon.stop()
			.css('opacity',0).show()
			.animate({opacity:1},2000);
	};
	function hideBalloon(){
		balloon.stop().animate({opacity:0},2000,function(){balloon.hide()});
	};
	
	$('.showBalloon').each(function(){
		var element = $(this);
		var text = element.attr('title');
		element.attr('title','');
		element.hover(
			function(event){
				balloon.text(text);
				updateBalloonPosition(event.pageX, event.pageY);
				showBalloon();
			},
			function(){
				hideBalloon();
			}
		);
		
		element.mousemove(function(event){
			updateBalloonPosition(event.pageX, event.pageY);
		});
	});
});













