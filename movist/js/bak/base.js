$(function(){
 $(function(){
                    $(".gnb_sub").css({"width":"0","height":"0","opacity":"0","transition":"all 0.4s","transform":"rotate(0deg)","left":"100px"});
                     $(".gnb_sub>li>a").css({"fontSize":"0","marginLeft":"0"});
                    $(".gnb_sub>li>a").hide();
                     $(".gnb_sub2").css({"width":"0","left":"190px","opacity":"0"});
                     $(".gnb_sub2").show();
                    $(".gnb_sub").find("*").addClass("hidden");
                    $(".gnb_sub2").find("*").addClass("hidden");
                    $("#header #gnb>li").stop().on("mouseenter focusin",function(){
                        //$(".gnb_sub").hide();
                        $(".gnb_sub>li>a").css({"fontSize":"16px","marginLeft":"40px"});
                       

                      $(".gnb_sub>li>a").show(); 
                       $(this).children(".gnb_sub").css({"display":"block","width":"800px","height":"50px","opacity":"1","left":"230px"}); 
                      
                        
                     
                       
                         $(this).children(".gnb_sub2").css({"display":"block","opacity":"1","width":"800px","transition":"all 0.4s","position":"absolute","left":"230px","z-index":"199"});
                        $(".gnb_sub2").show();
                        
                    $(".gnb_sub").find("*").removeClass("hidden");
                    $(".gnb_sub2").find("*").removeClass("hidden");
                    });
                    
                     $("#header #gnb>li").stop().on("mouseleave focusout",function(){
                        $(".gnb_sub").css({"opacity":"0","width":"0px","height":"50px","transform":"rotate(0deg)","left":"190px"});
                        $(".gnb_sub>li>a").hide();
                       $(".gnb_sub2").css({"opacity":"0","width":"0","transition":"all 0.4s","left":"190px"});
				      
                        $(".gnb_sub>li>a").css({"fontSize":"0", "marginLeft":"0"});
                    $(".gnb_sub").find("*").addClass("hidden");
                    $(".gnb_sub2").find("*").addClass("hidden");
                        
                    });
     
                    //tab
                   $(window).resize(function(){
                        $("#header #gnb>li").off();
                        console.log($(window).width());
                        if($(window).width()< 1200){
                            $("#header #gnb").css("position","relative");
                           $("#header #gnb>li").css("position","static");
                          $("#header .gnb_sub").css({"transform":"rotate(0deg)","width":"800px","height":"0px","backgroundColor":"rgb(255,255,255)","color":"rgb(255,255,255)","fontSize":"15px","textIndent":"20px"});

                           $(".gnb_sub strong").css({"backgroundColor":"rgb(20, 184, 218)","padding":"4px"})
                           $("#header .gnb_sub2").css({"transform":"rotate(0deg)","width":"800px","height":"0px"});

                            $("#header #gnb>li").stop().on("mouseenter focusin",function(){

                                console.log("tab_i");
                                //$(".gnb_sub").hide();
                                $(".gnb_sub>li>a").css({"fontSize":"16px","marginLeft":"40px"});
                                $(".gnb_sub").css({"width":"800px","height":"50px","opacity":"0","transform":"rotate(0deg)","transition":"all 0.4s"});
                                $(".gnb_sub>li>a").show(); 
                                $(this).children(".gnb_sub").css({"display":"block","width":"800px","height":"50px","opacity":"1","transform":"rotate(0deg)","transition":"all 0.4s","left":"0px","top":"50px"});




                                $(".gnb_sub2").css({"display":"none","opacity":"0","height":"0px" ,"width":"800px","transition":"all 0.4s"});
                                $(this).children(".gnb_sub2").css({"display":"block","opacity":"1","width":"800px","height":"360px","transition":"all 0.4s","position":"absolute","left":"0px","top":"50px"});
                                //$(".gnb_sub2").show();

                                $(".gnb_sub").find("*").removeClass("hidden");
                                $(".gnb_sub2").find("*").removeClass("hidden");
                            });

                            $("#header #gnb>li").stop().on("mouseleave focusout",function(){
                                $("#header .gnb_sub").css({"backgroundColor":"##0386a2;","left":"0px","opacity":"0","width":"0px","height":"0px","transform":"rotate(0deg)"});
                                $(".gnb_sub>li>a").hide();
                                $(".gnb_sub2").css({"display":"none","opacity":"0","width":"800px","height":"0px","transition":"all 0.4s","left":"0px"});

                                $(".gnb_sub>li>a").css({"fontSize":"0", "marginLeft":"0"});
                                $(".gnb_sub").find("*").addClass("hidden");
                                $(".gnb_sub2").find("*").addClass("hidden");
                            });
                        }//end if
                       
                	else if($(window).width()> 1200){
                        //
                        $("#header #gnb>li").off();
                        

                        $("#header #gnb").css("position","relative");
                        $("#header #gnb>li").css("position","static");
                      
                        
                        $("#header .gnb_sub").css({"transform":"rotate(0deg)","width":"800px","height":"0px","backgroundColor":"rgb(255,255,255)","color":"rgb(255,255,255)","fontSize":"15px","textIndent":"20px"});
                       $(".gnb_sub strong").css({"backgroundColor":"rgb(20, 184, 218)","padding":"4px"})
                      $("#header .gnb_sub2").css({"transform":"rotate(0deg)","width":"800px","height":"0px"});

                        
                        
                        
                        $(".gnb_sub").css({"width":"0","height":"0","opacity":"0","transition":"all 0.4s","transform":"rotate(0deg)","left":"200px","top":"0px","backgroundColor":"rgb(20, 113, 133)"});
                        $(".gnb_sub strong").css({"backgroundColor":"rgb(20, 113, 133)","color":"rgb(255, 255, 255)"})
                        $("#gnb>li").css({"position":"relative"});
                        $(".gnb_sub>li>a").css({"fontSize":"0","marginLeft":"0"});
                        $(".gnb_sub>li>a").hide();
                        $(".gnb_sub2").css({"width":"0","left":"200px","opacity":"0","top":"0px","backgroundColor":"rgba(255,255,255)"});
                        $(".gnb_sub2").show();
                        $(".gnb_sub").find("*").addClass("hidden");
                        $(".gnb_sub2").find("*").addClass("hidden");
                   
                    
                        $("#header #gnb>li").stop().on("mouseenter focusin",function(){
                            //$(".gnb_sub").hide();
                            $(".gnb_sub>li>a").css({"fontSize":"16px","marginLeft":"40px"});
                            $(".gnb_sub").css({"left":"200px","top":"0px","width":"0px","height":"50px","opacity":"0","transform":"rotate(0deg)","transition":"all 0.4s","fontSize":"24px"});
                            $(".gnb_sub>li>a").show(); $(this).children(".gnb_sub").css({"display":"block","width":"800px","height":"50px","opacity":"1","transform":"rotate(0deg)","transition":"all 0.4s","left":"230px"});




                            $(".gnb_sub2").css({"display":"none","opacity":"0","width":"0","transition":"all 0.4s","top":"0","left":"200px"});
                            $(this).children(".gnb_sub2").css({"display":"block","opacity":"1","width":"800px","transition":"all 0.4s","position":"absolute","left":"230px","z-index":"199","top":"0px"});
                            $(".gnb_sub2").show();

                            $(".gnb_sub").find("*").removeClass("hidden");
                            $(".gnb_sub2").find("*").removeClass("hidden");
                        });
                    
                        $("#header #gnb>li").stop().on("mouseleave focusout",function(){
                        $(".gnb_sub").css({"opacity":"0","width":"0px","height":"50px","transform":"rotate(0deg)","left":"190px"});
                        $(".gnb_sub>li>a").hide();
                        $(".gnb_sub2").css({"opacity":"0","width":"0","height":"0","transition":"all 0.4s","left":"190px"});
				      
                        $(".gnb_sub>li>a").css({"fontSize":"0", "marginLeft":"0"});
                        $(".gnb_sub").find("*").addClass("hidden");
                        $(".gnb_sub2").find("*").addClass("hidden");});	
						
						
						
					}});//end
                    return false;

                })    
$(".gnb_m_sub").slideUp();

$(".gnb_m>li>a").stop().on("click focusin" ,function(){
$(this).siblings(".gnb_m_sub:not(:animated)").stop().slideToggle();
return false;
}) //마우스오버: 자기 밖으로 나간 자식 인정안함
//마우스엔터 : 자기 밖으로 나간 자식 인정함. 
$(".play_arrow4").css({"transform":"rotate(44deg)","transition":"all 0.3s","width":"0px"});
$(".play_arrow5").css({"transform":"rotate(-44deg)","transition":"all 0.3s","width":"0px"});

$(".gnb_m").animate({"marginLeft" : "-200px"});
$(".m_play").click(function(){

if($(".gnb_m").css("marginLeft") == "-200px")
{
    $(".m_play").css({"transform":"rotate(-180deg)"});
    $(".gnb_m").animate({"marginLeft" : "0px"});
$(".play>a>img").attr("src","images/arrow_stop.png");

  $(".play_arrow1").css({"transition":"all 0.3s","width":"0px"});
  $(".play_arrow3").css({"transition":"all 0.3s","width":"0px"});
 $(".play_arrow4").css({"transform":"rotate(-45deg)","transition":"all 0.3s","width":"28px"});
$(".play_arrow5").css({"transform":"rotate(45deg)","transition":"all 0.3s","width":"28px"});
     $(".gnb_m_sub").slideUp();
}

else if($(".gnb_m").css("marginLeft") == "0px")
{ 	$(".m_play").css({"transform":"rotate(0deg)"});
    $(".gnb_m").animate({"marginLeft" : "-200px"})
    $(".m_play>a>img").attr("src","images/arrow_play.png");
 $(".play_arrow1").css({"transition":"all 0.3s","width":"40px"});
  $(".play_arrow3").css({"transition":"all 0.3s","width":"40px"});
     $(".play_arrow4").css({"transform":"rotate(45deg)","transition":"all 0.3s","width":"0px"});
$(".play_arrow5").css({"transform":"rotate(-45deg)","transition":"all 0.3s","width":"0px"});

}

return false;
});








});