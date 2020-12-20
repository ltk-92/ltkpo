$(function(){
    $("#all_list").find("*").addClass("hidden");
   $("#gnb").mouseenter(function(){
     $("#all_list").find("*").removeClass("hidden");
        
  });
      $("#gnb").mouseleave(function(){
      $("#all_list").find("*").addClass("hidden");
        
   });
    var visual_width = $(".visual-box>li").width();
     $(".visual-box").css({"marginLeft":-(visual_width)});
    $(".visual-box").prepend("<li>"+$('.visual-box>li:eq(2)').html()+"</li>");
    $(".visual-box").append("<li>"+$('.visual-box>li:eq(1)').html()+"</li>");
     i = 0;
    $(".right-button").click(function(){
        $(this).css({"border":"5px solid transparent"});
        var visual_width = $(".visual-box>li").width(); 
        $('.visual-box').stop().animate({'marginLeft':'-='+visual_width},function(){
            if(parseInt($(".visual-box").css("marginLeft"))<-3*visual_width){
                $(".visual-box").css({"marginLeft":-(visual_width)})
            };
            i+=1;
            indi_num = i%3;
            $(".visual-indicater>li").removeClass("on");
            $(".visual-indicater>li").eq(indi_num).addClass("on");
            console.log(i);
        });
        console.log($(".visual-box").css("marginLeft"));
    });
     $(".left-button").click(function(){
         var visual_width = $(".visual-box>li").width(); 
        $('.visual-box').stop().animate({"marginLeft":'+='+visual_width},function(){
             if(parseInt($(".visual-box").css("marginLeft"))>-(visual_width)){
                $(".visual-box").css({"marginLeft":-3*visual_width})
            }
            i-=1;
            indi_num = i%3;
            $(".visual-indicater>li").removeClass("on");
            $(".visual-indicater>li").eq(indi_num).addClass("on");
             console.log(i);
        });
         console.log($(".visual-box").css("marginLeft"));
    });
    $(".visual-indicater>li").click(function(){
         var visual_width = $(".visual-box>li").width(); 
        $(".visual-indicater>li").removeClass("on");
        $(this).addClass("on");
        var index_num = parseInt($(".on").index())+1; 
        var move = String(index_num*-(visual_width))+"px";
       $(".visual-box").animate({"marginLeft" : move});
        i= index_num-1;
        console.log(i);
    });
    $(window).resize(function(){
        var visual_width = $(".visual-box>li").width(); 
        $(".visual-indicater>li").removeClass("on");
        $(".visual-indicater>li").first().addClass("on");
        i= 0;
        $(".visual-box").css({"marginLeft":-(visual_width)});
         if($(window).width()>900){
            $(".visual-box").css({"marginLeft":'-1920px'});
        };
    });
    
    $("#consult-input").focus(function(){
        $(this).attr("value","");
    });
    $("#consult-input").blur(function(){
        $(this).attr("value","이름을 입력해주세요")
    });
    
    name_data = $("#consultinput").val();
				$(function(){
					
					$(".gnb_m_sub").slideUp();
					
					$(".gnb_m>li>a").on("click focusin" ,function(){
                        $(this).siblings().slideDown();
                        $(".gnb_m>li>a").not(this).siblings().stop().slideUp();
						
						return false;
					}) //마우스오버: 자기 밖으로 나간 자식 인정안함
						//마우스엔터 : 자기 밖으로 나간 자식 인정함. 
					 $(".play_arrow4").css({"transform":"rotate(44deg)","transition":"all 0.3s"});
                        $(".play_arrow5").css({"transform":"rotate(-44deg)","transition":"all 0.3s"});
						
				 //$(".gnb_m").animate({"marginLeft" : "0px"});
				$(".m_play").click(function(){
                       
						if($(".gnb_m").css("right") == "-200px")
						{
							$(".m_play").css({"transform":"rotate(180deg)"});
							$(".gnb_m").animate({"right" : "0px"});
						$(".play>a>img").attr("src","images/arrow_stop.png");
						 
						  $(".play_arrow1").css({"transition":"all 0.3s","width":"0px"});
						  $(".play_arrow3").css({"transition":"all 0.3s","width":"0px"});
						 $(".play_arrow4").css({"transform":"rotate(45deg)","transition":"all 0.3s","width":"30px"});
                        $(".play_arrow5").css({"transform":"rotate(-45deg)","transition":"all 0.3s","width":"30px"});
							 $(".gnb_m_sub").slideUp();
						}

						else if($(".gnb_m").css("right") == "0px")
						{ 	$(".m_play").css({"transform":"rotate(0deg)"});
							$(".gnb_m").animate({"right" : "-200px"})
							$(".m_play>a>img").attr("src","images/arrow_play.png");
						 $(".play_arrow1").css({"transition":"all 0.3s","width":"40px"});
						  $(".play_arrow3").css({"transition":"all 0.3s","width":"40px"});
							 $(".play_arrow4").css({"transform":"rotate(45deg)","transition":"all 0.3s","width":"0px"});
                        $(".play_arrow5").css({"transform":"rotate(-45deg)","transition":"all 0.3s","width":"0px"});
						
						}
				
						return false;
					});
					
				});

});
