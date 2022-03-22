$(document).ready(function(){	
	var textset;
		$(window).scroll(function(){
			clearInterval(textset);
			loadview();
		});

	draw(200, '.icon-bg', ' #b0dfd8', '#4eb8b9');
	logodel();
	loadview();
	$(".main-menu>li").on('click',function(){//메뉴 클릭시 스크롤 이동
		logodel();
		//e.preventDefault();
		var m = $(this).index();
        var sum = 0;
        for(i=m;i>=0;i--){
            sum += $('.realm').eq(i).height();
        };
		var nowTop = sum+30;
		$('html, body').stop().animate({'scrollTop':nowTop},1000);
		var ji = m+1;
		$(".realm").children().addClass("pagehide");
		$(".realm").children().removeClass("pageshow");	
		$(".realm").eq(ji).children().removeClass("pagehide");
		$(".realm").eq(ji).children().addClass("pageshow");
		console.log("ji="+ji)
	});
    
    //마우스 휠 동작시 아래로 스크롤 이동
	$(window).scroll(function(){
		logodel();
		var sectionTop = parseInt($("#profile-wrap").offset().top);
		console.log("sectionTop"+sectionTop);
		//if($(window).scrollTop()==sectionTop){
		//	$("#profile-wrap").children().fadeOut();
	
			
		//};
        var size = $('section').size();//갯수
		$('section').on('mousewheel',function(event,delta){
			if(delta>0 && $(this).index()>=1){
				var present = $(this).prev();
				pageshow(present);
				var presentTop = present.offset().top;
				$('html,body').stop().animate({'scrollTop':presentTop},2000,'easeOutExpo')
				 //if(delta>0 && $(this).index()==1){
					//clearInterval(textset);
					//slideText();
				//};
			}else if(delta<0 && $(this).index()<3){
				var present = $(this).next();
				pageshow(present);
				var presentTop = present.offset().top; 
				$('html,body').stop().animate({'scrollTop':presentTop},2000,'easeOutExpo')
				//if(delta<0 && $(this).index()==0){
					//clearInterval(textset);
				//};
			}else if(delta<0 && $(this).index()==3){
				var present = $("#footer-wrap");
				pageshow(present);
				var presentTop = present.offset().top;
				$('html,body').stop().animate({'scrollTop':presentTop},2000,'easeOutExpo')
			};
			
	
		});
		$('#footer-wrap').on('mousewheel',function(event,delta){
            if(delta>0){
				var present = $("section").eq(3);
				pageshow(present);
				var presentTop = present.offset().top;
				$('html,body').stop().animate({'scrollTop':presentTop},2000,'easeOutExpo');
				
				
			};
		
        });
	});		
    //end
	 console.log("test");
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
				$(".header-wrap").css("background","gba(255,255,255,0.3)");
			}else if($(window).scrollTop()==0){
				$("h1").find("img").fadeIn();
				$(".header-wrap").css("background","rgba(255,255,255,0.1)");				
			};	
		};
	function pageshow(present) {
		$(".realm").children().addClass("pagehide");
		$(".realm").children().removeClass("pageshow");
		present.children().removeClass("pagehide");	
		present.children().addClass("pageshow");
	};
	function slideText(){
		var interval = 200; // 초설정
		var idx=0;
		function textmotion() {	
			idx++;
			$(".greeting-list>p").hide();
			$(".greeting-list>p").eq(idx).show();
			if(idx>= 31){
				clearInterval(textset);
			};
		};
		textset = setInterval(textmotion,interval);			
		if($(window).scrollTop()>0){
			clearInterval(textset);
			$(".greeting-list>p").hide();
		};
		//console.log("스크롤값"+$(window).scrollTop());
		//console.log("textset:"+textset);
		//console.log("디스플레이:"+$(".greeting-list>p").css("display"));					
	};
	function loadview(){
		var sum = 0;
		for(l=0;l<5;l++){		
			var win = $(window).scrollTop();
			var realmL = $(".realm").eq(l).offset().top;
			sum += $(".realm").eq(l).height();
			var header = $("#header-wrap").height();
			var pent = sum- header;		 
			if(win >= realmL && win < pent){
				$(".realm").children().addClass("pagehide");
				$(".realm").children().removeClass("pageshow");
				$(".realm").eq(l).children().removeClass("pagehide");	
				$(".realm").eq(l).children().addClass("pageshow");
			};
		};
		if($("#visual-wrap").eq(0).children().hasClass("pageshow")){
			clearInterval(textset);
			slideText();
		};

	};
	$(function(){
		$(window).resize(function(){
			if($(window).width()<=1430){
				$(window).scroll(function(){
					clearInterval(textset);
					loadview();
				});
			};
		});
				
	});      
	
});

















