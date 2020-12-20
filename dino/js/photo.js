 $(function(){
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
                $('.sub-list').eq(tab_index).find("img").removeClass("selected");
                $('.sub-list').eq(tab_index).find("img").eq(0).addClass("selected");
                var image_src = $(".sub-list").eq(tab_index).find(".selected").attr("src");
                $(".sub-content").children("img").attr("src",image_src);
            });
            $(".button-right").click(function(){
                $(".sub-list").stop().animate({"marginLeft":"-=150px"});
                if(parseInt($(".sub-list").css("marginLeft"))<=-450){
                    $(".sub-list").stop().animate({"marginLeft":"-450px"});
                }
                $("img.selected").parent("li").next().children().addClass("selected");
                $("img.selected").parent("li").prev().children().removeClass("selected");
                var image_src = $(".sub-list").eq(tab_index).find(".selected").attr("src");
                $(".sub-content").children("img").attr("src",image_src);
                
                console.log(image_src);
            });
            $(".button-left").click(function(){
                $(".sub-list").stop().animate({"marginLeft":"+=150px"});
                if(parseInt($(".sub-list").css("marginLeft"))>=0){
                    $(".sub-list").stop().animate({"marginLeft":"0px"});
                }
                $("img.selected").parent("li").prev().children().addClass("selected");
                $("img.selected").parent("li").next().children().removeClass("selected");
                var image_src = $(".sub-list").eq(tab_index).find(".selected").attr("src");
                $(".sub-content").children("img").attr("src",image_src);
            });
            $(".sub-list>li").click(function(){
                $(".sub-list>li").children("img").removeClass("selected");
                $(this).children("img").addClass("selected");
                if(tab_index=='0'){var selected_image = "poster";}
                else if(tab_index=='1'){var selected_image = "cut";};
                var photo_num = parseInt($(this).index())+1;
                sub_content = $(".sub-content").eq(tab_index);
                sub_content.children("img").remove();
                sub_content.append("<img src='img/"+ selected_image + photo_num+".jpg' alt=''>");
                console.log(selected_image);
                console.log(tab_index);
                console.log(this);
            });
        });