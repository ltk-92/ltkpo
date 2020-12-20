$(function(){
    $(".mobile-button").click(function(){
        if($(".mobile-button").find("img").attr("src") == "images/mobile-open.png")
            {
                $(".mobile-button").find("img").attr("src","images/mobile-close.png")
                $("#gnb-m").animate({"left":"65%"});
            }
        else if($(".mobile-button").find("img").attr("src") == "images/mobile-close.png")
            {
                $(".mobile-button").find("img").attr("src","images/mobile-open.png")
                $("#gnb-m").animate({"left":"200%"})
            }
    })
})