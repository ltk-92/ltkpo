jQuery(document).ready(function(){
	//alert('a');
	$('.guideText').each(function(){
		var guideText = this.defaultValue;
		// var guideText.get(0) = 이름을 입력해주세요
		// var guideText.get(1) = 메세지를 입력해주세요
		var element = $(this);
		
		if(element.val()===guideText){
			element.addClass('guide');
		};
		
		element.focus(function(){
			if(element.val()===guideText){
				element.val('');
				element.removeClass('guide');
			}
		});

		element.blur(function(){
			if(element.val()===''){
				element.val(guideText);
				element.addClass('guide');
			}
		});

	});
});













