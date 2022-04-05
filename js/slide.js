  $(function(){
      
        /*$('section').on('mousewheel',function(event,delta){
            if($(".greeting-list").hasClass("pageshow")){
                slideText(0);
            }else if($(".greeting-list").hasClass("pagehide")){
                clearInterval(textmotion);
            };
        });*/

    //End Each
    
    //화살표 버튼
     $(".left-btn").click(function(){
        var webList = $(".web-list");
        $(".web-list>li").fadeOut();
        $(".web-list>li:last").prependTo(webList);
        $(".web-list>li").removeClass("web-on");
        $(".web-list>li:last").addClass("web-on");
        $(".web-on").fadeIn();
    });
    $(".right-btn").click(function(){
        var webList = $(".web-list");
        $(".web-list>li").fadeOut();
        $(".web-list>li:first").appendTo(webList);
        $(".web-list>li").removeClass("web-on");
        $(".web-list>li:first").addClass("web-on");
        $(".web-on").fadeIn();
        
    });
}); //End jquery