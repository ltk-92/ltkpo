jQuery(document).ready(function(){
	// 요거 고쳐서 쓰세요.
	var guideClass = 'guide';
	
	$('.guideText').each(function(){
		var guideText = this.defaultValue;
		var element = $(this);
		
		if(element.val()===guideText){
			element.addClass(guideClass);
		};
		
		element.focus(function(){
			if(element.val()===guideText){
				element.val('');
				element.removeClass(guideClass);
				element.addClass('focus');
			}
		});

		element.blur(function(){
			if(element.val()===''){
				element.val(guideText);
				element.addClass(guideClass);
				element.removeClass('focus');
			}
		});

	});
});













