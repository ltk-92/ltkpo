jQuery(document).ready(function(){
	$('.accordion').each(function(){
		var dl =$(this);
		var allDt = dl.find('dt');
		var allDd = dl.find('dd');
		allDd.hide();
		allDd.eq(0).show();
		allDt.css('cursor','pointer');
		allDt.eq(0).css('cursor','default');
		
		allDt.click(function(){
			var dt = $(this);
			var dd = dt.next();
			allDd.hide();
			dd.show();
			allDt.css('cursor','pointer');
			dt.css('cursor','default');
		});
	});
});









