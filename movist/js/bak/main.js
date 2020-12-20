
$(function(){
                    $(".sliding_ul").css({"marginLeft":"-100%"});
                   
                    
                    $(".right").click(function(){
                        console.log($(".sliding_ul").css("marginLeft"));
                        
           
                        $(".sliding_ul").animate({"marginLeft":"-=100%"}, function(){ 
                           $(".sliding_ul").append($(".sliding_ul li:first"));
                             $(".sliding_ul").css({"marginLeft":"-100%"});                                                          
                                                                                      
                                                                                      });
                       
                    });
                    
                    
                      $(".left").click(function(){
                          console.log($(".sliding_ul").css("marginLeft"));
                         
                          
                        
                             $(".sliding_ul").animate({"marginLeft":"+=100%"}, function(){                         
                           $(".sliding_ul").prepend($(".sliding_ul li:last"));
                            $(".sliding_ul").css({"marginLeft":"-100%"});
                                                                                      });

                        
                        
                    });
                      $(".left").on("mouseover focusin mousedown",function(){
                          
                        $(".left").find("img").attr("src","images/left_hover.png");
                        
                    });
                      $(".left").on("mouseout focusout mouseup",function(){
                          
                        $(".left").find("img").attr("src","images/left.png");
                        
                    });
					 $(".right").on("mouseover focusin mousedown",function(){
                          
                        $(".right").find("img").attr("src","images/right_hover.png");
                        
                    });
                      $(".right").on("mouseout focusout mouseup",function(){
                          
                        $(".right").find("img").attr("src","images/right.png");
                        
                    });
					
					 $(".stop").on("mouseover focusin mousedown",function(){
                          
                        $(".stop").find("img").attr("src","images/stop_hover.png");
                        
                    });
                      $(".stop").on("mouseout focusout mouseup",function(){
                          
                        $(".stop").find("img").attr("src","images/stop.png");
                        
                    });
					
					
                    var auto = setInterval(function(){ $(".right").click();},2000);
                    var play = true; 
                    
                    
                    $(".stop").click(function(){
                     
                        if(play == true){ 
                            clearInterval(auto);  
                            $(".stop").find("img").attr("src","images/stop2.png");
                            play = false;
							
							
							 $(".stop").on("mouseover focusin mousedown",function(){
                          
                        $(".stop").find("img").attr("src","images/stop2_hover.png");
                        
                    });
                      $(".stop").on("mouseout focusout mouseup",function(){
                          
                        $(".stop").find("img").attr("src","images/stop2.png");
                        
                    });
                        }
                        else{
                            auto = setInterval(function(){ $(".right").click()},2000);
                            $(".stop").find("img").attr("src","images/stop.png");    
                            play = true;   
							 $(".stop").on("mouseover focusin mousedown",function(){
                          
                        $(".stop").find("img").attr("src","images/stop_hover.png");
                        
                    });
                      $(".stop").on("mouseout focusout mouseup",function(){
                          
                        $(".stop").find("img").attr("src","images/stop.png");
                        
                    });
                        }
                        return false;
                    })
                    
                })
  $(function(){
        var box_width = parseInt($(".chartbox").css("width"))/2; 
        var con_width = parseInt($(".con1").css("width"))/2;
        console.log(con_width - box_width);
        $(".chartbox").css({"position":"absolute","left": "43px","top":"82px" });
        $(".chart_arrow>li").click(function(){
            $(".chart_arrow>li>a").removeClass("selected4");
            $(this).children("a").addClass("selected4");
            var cha = parseInt($(this).index());
            
            $(".chart").animate({"marginLeft":(-1136 * cha)+"px"});
            return false; 
        });
        
        $(".chart_tab>li:first a").addClass("selected");

     
		$(".chart_hover").css({"top":"50px","opacity":"0"});
			 
        $(".chart_tab>li:not(:first) a").removeClass("selected");
        $(".chart").hide();
        $(".chart:first").show();
        
        $(".chart_tab>li").on("click focusin" ,function(){
            var jj = Number($(this).index());
            $(".chart").hide();
            if($(".chart").css("marginLeft")=="-1136px"){
            $(".chart").css("marginLeft","0");
                $(".chart_arrow>li>a").removeClass("selected4");
                $(".chart_arrow>li:first>a").addClass("selected4");
            }
             
            $(".chart:eq("+jj+ ")").show();
             $(".chart_tab>li a").removeClass("selected");
             $(this).children("a").addClass("selected");
            return false;
           
        });
     $(".chart>li").on("mouseover focusin", function(){
               
            $(this).children(".chart_hover").css({"top":"0","opacity":"1","backgroundColor":"rgba(0,0,0,0.7)"});
                
                return false;
            });
    
  
    $(".chart>li").on("mouseout focusout", function(){
               
            $(".chart_hover").css({"top":"50px","opacity":"0","backgroundColor":"rgba(0,0,0,0)"});
                
                 return false;
            });
       
    });
 $(function(){
		 $(".con2 dt:first").children(".arc_icon").css({"transform":"rotate(180deg)"});
         $(".con2 dd").slideUp();
         $(".con2 dd:first").slideDown();
         $(".con2 dt:first").css("backgroundColor","#147185");
         $(".con2 dt").css("backgroundColor","#147185");
         $(".con2 dd").css("backgroundColor","#1facc0");
           $(".con2 dt").click(function(){
           
           $("dd").slideUp();
           
			$(".arc_icon:not(this)").css({"transform":"rotate(0deg)"});
			 $(this).children(".arc_icon").css({"transform":"rotate(180deg)"});
			$(this).next("dd").slideDown();
            $(".con2 dt").css("backgroundColor","#147185");
            $(this).css("backgroundColor","#147185");
            return false;
            
        });
         
         });
 $(function(){
                $(".review").hide();
               $(".review1").show();
                
                $(".review_tab>li>a").removeClass("selected2");
                $(".review_tab>li:first>a").addClass("selected2");
               
                $(".review_tab>li>a").on("click focusin", function(){
                   $(".review_tab>li>a").removeClass("selected2");        
                   $(this).addClass("selected2"); 
                   
                   $(".review").hide();
                
                   $(this).siblings(".review").show();
                  
                   
               return false;
                });
            });
  $(function(){
               
                        
               
                    var i = 1;
                    
                    var auto = setInterval(no,3000);
                    
                    function no (){
                                
                        i=i+1;
                       
                        if(i== 6){i= i-5;};
                        
                        console.log("i=" +i);
                        
                    
                 
                        $(".news_img>img").before("<img src = 'images/n"+ i+ ".jpg' alt='사진'/>");
                        $(".news_img>img:not(:eq(0))").fadeOut(1000,"linear",function(){$(".news_img>img:not(:eq(0))").remove()});
                       
                        
                        $(".fr>li").children("a").removeClass("selected3");           
                         $(".news_title").slideUp(1000,function(){$(".news_title").slideDown()});
                        
                        $(".fr>li:eq("+ (i-1) + ")").children("a").addClass("selected3");
                        
                         $(".news_title").slideUp(500,function(){$(".news_title").slideDown();
                                                           $(".news_title>a").html($(".fr>li:eq("+ (i-1) +")").children("a").html());
                                                           
                        $(".news_title>a").attr({"href":$(".fr>li:eq("+(i-1)+")").children("a").attr("href")});                                   
                                                                
                                                                });
                        
                        
                       
                                     };
                    
               
                     $(".fr li").on("click focusin",function(){
                         
                      
                
                     var imgno = parseInt($(this).index());
                    
                         
                           $(".news_img>img").before("<img src = 'images/n"+ (imgno+1)+ ".jpg' alt='사진'/>");
                        $(".news_img>img:not(:eq(0))").fadeOut(1000,"linear",function(){$(".news_img>img:not(:eq(0))").remove()});
                         
                    $(".fr>li>a").removeClass("selected3");
                    $(this).children("a").addClass("selected3");
                    clearInterval(auto);
                    $(".news_title").slideUp(500,function(){$(".news_title").slideDown();
                                                           $(".news_title>a").html($(".fr>li:eq("+imgno+")").children("a").html());
                                                            $(".news_title>a").attr({"href":$(".fr>li:eq("+(imgno)+")").children("a").attr("href")}); 
                                                           });  
                    return false;         
               
                    
                        
                    });
                    
               
            
               

            });
 $(function(){
                $(".con4 .w270>div").hide();
                $(".con4 .w270>div:first").show();
                
                $(".suda_right").click(function(){
                    $(".con4 .w270>div").hide();
                    $(this).parent().parent().next("div").show();
                    return false;
                })
                   $(".suda_left").click(function(){
                    $(".con4 .w270>div").hide();
                    $(this).parent().parent().prev("div").show();
                    return false;
                })
				    $(".con4 .w270>div:first").find(".suda_left").click(function(){
                    $(".con4 .w270>div").hide();
                   $(".con4 .w270>div:eq(2)").show();
                })
                   $(".con4 .w270>div:last").find(".suda_right").click(function(){
                    $(".con4 .w270>div").hide();
                   $(".con4 .w270>div:eq(0)").show();
                })
            })            
        
            
        