 $(function(){
            $(".dino-introduce>li").find(".dino-info").hide();
            $(".dino-introduce>li:first").find(".dino-info").show();
            $(".dino-introduce>li:first").children("a").css("border","1px solid #fff");
            $(".dino-introduce>li").hover(function(){
            $(".dino-introduce>li").children("a").css("border","none");
            $(this).children("a").css("border","1px solid #fff");
            $(".dino-info").hide();
            $(this).find(".dino-info").fadeIn();
            });
         });    