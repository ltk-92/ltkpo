 $(function(){
            var videos0 = new Array;
            videos0[0] = "<iframe src='https://tv.naver.com/embed/5093218?autoPlay=true' frameborder='no' scrolling='no' marginwidth='0' marginheight='0' WIDTH='970' HEIGHT='545' allow='autoplay' allowfullscreen></iframe>";
            videos0[1] = "<iframe width='560' height='315' src='https://www.youtube.com/embed/JPZ1x4Bw5js' frameborder='0'allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
            videos0[2] = '<iframe width="560" height="315" src="https://www.youtube.com/embed/bbR_3E_nq48" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            videos0[3] ='<iframe width="560" height="315" src="https://www.youtube.com/embed/FIieAfg4xFk" fraborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            videos0[4] =  '<iframe width="560" height="315" src="https://www.youtube.com/embed/H8qGr21QTUg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            videos0[5] =  '<iframe width="560" height="315" src="https://www.youtube.com/embed/BLinQNj1zqg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            var videos1 = new Array;
            videos1[0] = '<iframe width="560" height="315" src="https://www.youtube.com/embed/lTA0f1Ulx54" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
             videos1[1] =  '<iframe width="560" height="315" src="https://www.youtube.com/embed/mUMFQ-B0Ysk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            videos1[2] = '<iframe width="560" height="315" src="https://www.youtube.com/embed/gaYMYpVRRrI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            videos1[3] ='<iframe width="560" height="315" src="https://www.youtube.com/embed/T-2WKjhT7VI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            videos1[4] ='<iframe width="560" height="315" src="https://www.youtube.com/embed/fK8yvbmaz0g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            videos1[5] ='<iframe width="560" height="315" src="https://www.youtube.com/embed/HxEF3piZ76A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
             var tab_index=0;
            $(".sub-list-view").eq(1).hide();
            $(".sub-content").eq(1).hide();
            
            $(".tab-button").click(function(){
                tab_index = $(this).index();
                $('.sub-content').hide();
                $('.sub-content').eq(tab_index).show();
                $(".tab-button").removeClass("clicked");
                $(this).addClass("clicked");
                $(".sub-list-view").hide();
                $(".sub-list-view").eq(tab_index).show();
                $(".sub-list").css("marginLeft","0px");
                $('.sub-list').find("img").removeClass("selected");
                $('.sub-list').eq(tab_index).children("li").eq(0).children("img").addClass("selected");
                $(".sub-content>iframe").remove()
                $(".sub-content").eq(tab_index).append(eval("videos"+tab_index+"["+0+"]"));
                $(".sub-list").eq(tab_index).children("li:first").children("p").children("img").attr("src","img/play-button-hover.svg")
            });
            
            $(".button-right").click(function(){
                $(".sub-list").stop().animate({"marginLeft":"-=150px"});
                if(parseInt($(".sub-list").css("marginLeft"))<=-450){
                    $(".sub-list").stop().animate({"marginLeft":"-450px"});
                }
                $("img.selected").parent("li").next().children("img").addClass("selected");
                $("img.selected").parent("li").prev().children("img").removeClass("selected");
                $("img.selected").next("p").children("img").attr("src","img/play-button-hover.svg");
                $("img.selected").parent("li").prev("li").children("p").children("img").attr("src","img/play-button.svg");
                $(".sub-content>iframe").remove();
                var video_num = parseInt($("img.selected").parent("li").index());
                var videos_up =eval("videos"+tab_index+"["+video_num+"]");
                $(".sub-content").eq(tab_index).append(videos_up);
                
                
                console.log(image_src);
            });
            $(".button-left").click(function(){
                $(".sub-list").stop().animate({"marginLeft":"+=150px"});
                if(parseInt($(".sub-list").css("marginLeft"))>=0){
                    $(".sub-list").stop().animate({"marginLeft":"0px"});
                }
                $("img.selected").parent("li").prev().children("img").addClass("selected");
                $("img.selected").parent("li").next().children("img").removeClass("selected");
                $("img.selected").next("p").children("img").attr("src","img/play-button-hover.svg");
                $("img.selected").parent("li").next("li").children("p").children("img").attr("src","img/play-button.svg");
                
                   $(".sub-content>iframe").remove();
                var video_num = parseInt($("img.selected").parent("li").index());
                var videos_up =eval("videos"+tab_index+"["+video_num+"]");
                $(".sub-content").eq(tab_index).append(videos_up);
            });
            $(".sub-list>li").click(function(){
                
                $(".sub-list>li>img").removeClass("selected");
                $(this).children("img").addClass("selected");
                
                var video_num = parseInt($(this).index());
                video_content = $(".sub-content").eq(tab_index);
                video_content.children("iframe").remove();
                var videos_up =eval("videos"+tab_index+"["+video_num+"]");
                video_content.append(videos_up);
                console.log(videos_up);
                 $(".sub-list>li>p>img").attr("src","img/play-button.svg");
                 $(".selected").next("p").find("img").attr("src","img/play-button-hover.svg");
            });
           
    });
