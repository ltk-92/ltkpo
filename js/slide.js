  $(function(){
	var interval = 200; // 초설정

    
	$('.greeting-list').each(function(){
		var container = $(this); // 클래스
		function switchImg(){ 
			var greetings = container.find('p');
			var first = greetings.eq(0).animate({fontSize : "150px"});
			var second = greetings.eq(1);
			first.hide().animate({fontSize : "100px"}).appendTo(container);
			second.show();
              if($('.greeting-list>p').eq(0).text()== 'Welcome To My Alternate Reality'){ 
            clearInterval(motion);   
            };	
		
            
		};
	var motion = setInterval(switchImg,interval); // 실행
  
       
	}); //End Each
    $(".web-list>li>a").click(function(){
        $(".modal").fadeIn(1000);
        $(this).siblings(".web-info").fadeIn(1000);
        return false;
    });
     $(".modal").click(function(){
        $(".modal").fadeOut(500);
        $(".web-info").fadeOut(500);
        return false;
    });//end modal
    //화살표 버튼
     $(".web-list-button>li:first").click(function(){
        $(".web-list>li.web-on").prev().addClass("web-on");
        $(".web-list>li.web-on").next().removeClass("web-on");
    });
    $(".web-list-button>li:last").click(function(){
        $(".web-list>li.web-on").next().addClass("web-on");
        $(".web-list>li.web-on").prev().removeClass("web-on");
    });
    $(".web-list-button>li:first").mouseenter(function(){
        $(this).find("img").attr("src","img/left-hover.png");
    })
     $(".web-list-button>li:first").mouseleave(function(){
        $(this).find("img").attr("src","img/left.png");
    })
    $(".web-list-button>li:last").mouseenter(function(){
        $(this).find("img").attr("src","img/right-hover.png");
    });
     $(".web-list-button>li:last").mouseleave(function(){
        $(this).find("img").attr("src","img/right.png");
    });
}); //End jquery