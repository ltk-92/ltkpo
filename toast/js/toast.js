$(function(){
    $("#all_list").find("*").addClass("hidden");//gnb
   $("#gnb").mouseenter(function(){
     $("#all_list").find("*").removeClass("hidden");
        
  });
      $("#gnb").mouseleave(function(){
      $("#all_list").find("*").addClass("hidden");
        
   });
    var visual_width = $(".visual-box>li").width();//메인비주얼
     $(".visual-box").css({"marginLeft":-(visual_width)});
    $(".visual-box").prepend("<li>"+$('.visual-box>li:eq(2)').html()+"</li>");
    $(".visual-box").append("<li>"+$('.visual-box>li:eq(1)').html()+"</li>");
     i = 0;
    $(".right-button").click(function(){//오른쪽 버튼
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
     $(".left-button").click(function(){//왼쪽 버튼
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
    $(".visual-indicater>li").click(function(){//인디케이터 버튼
         var visual_width = $(".visual-box>li").width(); 
        $(".visual-indicater>li").removeClass("on");
        $(this).addClass("on");
        var index_num = parseInt($(".on").index())+1; 
        var move = String(index_num*-(visual_width))+"px";
       $(".visual-box").animate({"marginLeft" : move});
        i= index_num-1;
        console.log(i);
    });
    $(window).resize(function(){//반응형 이벤트
        var visual_width = $(".visual-box>li").width(); 
        $(".visual-indicater>li").removeClass("on");
        $(".visual-indicater>li").first().addClass("on");
        i= 0;
        $(".visual-box").css({"marginLeft":-(visual_width)});
         if($(window).width()>1200){
            $(".visual-box").css({"marginLeft":'-1920px'});
        };
    });
    
   // $("#consult-input").click(function(){
      //  $(this).attr("value","ssss");
    //});
    //$("#consult-input").blur(function(){
   //     $(this).attr("value","이름을 입력해주세요")
   // });
    
    name_data = $("#consultinput").val();
				$(function(){//모바일 gnb
					
					$(".gnb_m_sub").slideUp();
					
					$(".gnb_m>li>div").on("click focusin" ,function(e){
                        e.preventDefault();
                        $(this).siblings().slideDown();
                        $(".gnb_m>li>div").not(this).siblings().stop().slideUp();
						
						return false;
					}) 
				$(".m_play").click(function(){//햄버거버튼
						if(parseInt($(".mobile-wrap").css("right"))<0){
                            $(".m_play").addClass("m_open");
							$(".mobile-wrap").animate({"right" : "0px"});
						}
						else if(parseInt($(".mobile-wrap").css("right"))==0){
                            $(".m_play").removeClass("m_open");
							$(".mobile-wrap").animate({"right" : "-385px"})
						}
						return false;
					});
					
				});
});
