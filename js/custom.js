$(document).ready(function(){
	
//$('section').on('mousemove',function(e){
		
	//	var posX = e.pageX;
	//	var posY = e.pageY;
	//	$('.p11').css({'right':0-(posX/30),'botttom':0-(posY/30)});
	//	$('.p12').css({'right':130+(posX/30),'botttom':-40+(posY/30)});
		
	//})
	
	$(".main-menu li").on('click',function(e){
		
		//e.preventDefault();
		var i = $(this).index();
        var sum = 0;
        for(i=i;i>=0;i--){
            sum += $('section').eq(i).height();
        };
        var header = $("header").height();
		var nowTop = sum - header;
		$('html, body').stop().animate({'scrollTop':nowTop},1000);
	});
    
    //wheel start
        var size = $('section').size();//갯수
		$('section').on('mousewheel',function(event,delta){
		
			if(delta<0 && $(this).index()==0){
				var test =  $(this).index();
				var header = $("header").height();
				var next = Number($(this).next().offset().top);
				var wheelDown = next- header;
			     console.log(test);
				$('html,body').stop().animate({'scrollTop':wheelDown},1500,'easeOutExpo');
                console.log(test);
			}
			
		});
			
		});
    //end
	 console.log("test");		
});

















