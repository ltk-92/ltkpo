jQuery(document).ready(function(){
	$('#div1').hover(
		function(){
			$('#div1').text('마우스 포인터가 위에 있습니다.');
		},
		function(){
			$('#div1').text('마우스 포인터가 벗어났습니다.');
		}
	);	
});

