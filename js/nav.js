$(function(){ // 태블릿, 모바일 햄버거버튼
    $(".nav-btn").click(function(){
        let barFirst = $(".nav-btn>div").eq(0); //첫번째 막대기
        let barCenter = $(".nav-btn>div").eq(1); //가운데 막대기
        let barLast = $(".nav-btn>div").eq(2); // 새번째 막대기
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