$(function(){
        
	/*$('#nav > ul > #springBtn').bind('click', function(){
		$('#image').removeClass();
		$('#image').addClass("spring");
	});
	$('#nav > ul > #summerBtn').bind('click', function(){
		$('#image').removeClass();
		$('#image').addClass("summer");
	});
	$('#nav > ul > #fallBtn').bind('click', function(){
		$('#image').removeClass();
		$('#image').addClass("fall");
	});
	$('#nav > ul > #winterBtn').bind('click', function(){
		$('#image').removeClass();
		$('#image').addClass("winter");
	});*/

	$('#nav > ul > li').each(function(){
		$('#nav> ul> li').click(function(){
			menu = $(this);
			classid = menu.attr('id').replace('Btn','');
			$('#image').removeClass().addClass(classid);
		})

	})
});