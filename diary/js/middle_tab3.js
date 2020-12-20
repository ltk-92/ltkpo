$(function(){
    var tab = $('#wrap #tab >li');
	var content = $('#content > div');

	tab.on('click', function(e){
		e.preventDefault();
		var tg = $(this);//클릭한 li
		var tc = tg.find('>a');//하위항목 a
		tab.find('>a').removeClass('on');
		tc.addClass('on');
		i = tg.index();
		content.css('display','none');
		content.eq(i).css('display','block');
	
		
	});

	var el = $('#content > div >img');
	var urls = [
		'http://www.naver.com',
		'http://www.daum.net',
		'http://www.hschool.co.kr',
		'http://www.nate.com'];

	el.on({
		mouseover:function(){
			var tg = $(this);
			tg.addClass("on");

		},mouseout:function(){
			
			var tg = $(this);
			tg.removeClass("on");
	
		},click:function(event){
	
			var tg = $(this);
			event.preventDefault();
			var i = tg.parent().index();	
			var linkURL = urls[i];
			location.href = linkURL;
			window.open(linkURL);	
	
		}

	});

});