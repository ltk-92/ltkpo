$(function(){
    $(".nav-btn").click(function(){
        var barCenter = $(".nav-btn>div").eq(1);
        var barFirst = $(".nav-btn>div").eq(0);
        var barLast = $(".nav-btn>div").eq(2);
        if($("nav").hasClass("close")){
            $("nav").removeClass("close");
            $("nav").addClass("open");
            barFirst.css({"transform":"rotate(40deg) scaleX(1.2)"});
            barLast.css({"transform":"rotate(-40deg) scaleX(1.2)"});
            barCenter.css("transform","scale(0)")
        }else if($("nav").hasClass("open")){
            $("nav").removeClass("open");
            $("nav").addClass("close");
            barFirst.css({"transform":"rotate(0deg) scaleX(1)"});
            barLast.css({"transform":"rotate(0deg) scaleX(1)"});
            barCenter.css("transform","scale(1)")
        };

    });
});