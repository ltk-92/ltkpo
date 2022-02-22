$(document).ready(function(){
	
//$('section').on('mousemove',function(e){
		
	//	var posX = e.pageX;
	//	var posY = e.pageY;
	//	$('.p11').css({'right':0-(posX/30),'botttom':0-(posY/30)});
	//	$('.p12').css({'right':130+(posX/30),'botttom':-40+(posY/30)});
		
	//})
	
	$(".main-menu li").on('click',function(e){//메뉴 클릭시 스크롤 이동
		logodel();
		//e.preventDefault();
		var i = $(this).index();
        var sum = 0;
        for(i=i;i>=0;i--){
            sum += $('.realm').eq(i).height();
        };
        var header = $("header").height();
		var nowTop = sum - header;
		
		$('html, body').stop().animate({'scrollTop':nowTop},1000);
	});
    
    //마우스 휠 동작시 아래로 스크롤 이동
	$(window).scroll(function(){
		logodel();
        var size = $('section').size();//갯수
		$('section').on('mousewheel',function(event,delta){
			if(delta>0 && $(this).index()>=1){
				var prev = $(this).prev().offset().top;
				$('html,body').stop().animate({'scrollTop':prev},2000,'easeOutExpo');
				
				
			}else if(delta<0 && $(this).index()<3){
				var next = $(this).next().offset().top; 
				$('html,body').stop().animate({'scrollTop':next},2000,'easeOutExpo');
			}else if(delta<0 && $(this).index()==3){
				var footer = $("#footer-wrap").offset().top;
				$('html,body').stop().animate({'scrollTop':footer},2000,'easeOutExpo');
			}
			
		});
		$('#footer-wrap').on('mousewheel',function(event,delta){
            if(delta>0){
				var section_tail = $("section").eq(3).offset().top;
				$('html,body').stop().animate({'scrollTop':section_tail},2000,'easeOutExpo');
				
				
			}
        });
	});		
    //end
	 console.log("test");
	 
	 $(window).ready(function(){
		draw(200, '.icon-bg', '#000', 'darkblue');
		logodel();

	 });
	 
	 function draw(max, classname, colorname1,colorname2){
		var cnt=1;
		 func1 = setInterval(donut,13);
		 function donut(){
			cnt++; 
		    if(cnt<=100){
				c1= colorname1;
				c2= colorname2;
			   color1(cnt,classname,c1,c2);
			   
		    }else if(cnt>=100 && cnt<=max){
				//clearInterval(func1);
			 	//var i=101;
				 var cnt2 = cnt-100;
				 c1 = colorname2;
				 c2 = colorname1;
				 color1(cnt2,classname,c1,c2);
				
		    }else if(cnt>max){
				cnt= 1;
				
				//c1= colorname1;
				//c2= colorname2;
				//color1(cnt,classname,c1,c2);
				
			}
			//console.log("cnt="+cnt);
		 };
		 $(".donut-stop").click(function(){
			//alert("!");
			if($(this).attr("class") == "donut-stop"){
				$(this).attr({
					"src":"img/play.png"
					,"alt":"도넛그래프 재생버튼"
					,"class":"donut-play"
				});
				clearInterval(func1);
			}
			else if($(this).attr("class") == "donut-play"){
				$(this).attr({
					"src":"img/stop.png"
					,"alt":"도넛그래프 정지버튼"
					,"class":"donut-stop"
				});
				func1 = setInterval(donut,13);
			};
		});	 
		}
	 function color1(i, classname,c1,c2){
		$(classname).css({
			 "background":"conic-gradient("+c1+" 0% "+i+"%, "+ c2+" "+i+"% 100%)"
		});
		
	 }//도넛그래프 끝
		function logodel(){ 
			if($(window).scrollTop()>0){
				$("h1").find("img").fadeOut();
				$(".header-wrap").css("background","rgba(0,0,0,1)");
			}else{
				$("h1").find("img").fadeIn();
				$(".header-wrap").css("background","rgba(0,0,0,0.3)");
			}
		
	};
		
});

















