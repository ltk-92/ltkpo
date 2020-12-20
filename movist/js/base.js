$(function(){
    $(".gnb_sub").addClass("hidden");//gnb 컨텐츠 없애기
    $(".gnb_sub2").addClass("hidden");//gnb 컨텐츠 없애기
    $(".gnb_sub").find("*").addClass("hidden");//gnb 컨텐츠 없애기
    $(".gnb_sub2").find("*").addClass("hidden");//gnb 컨텐츠 없애기
//gnb 데스크탑
    $("#gnb>li").on("mouseenter focusin" ,function(){
        $(".gnb_sub").addClass("hidden"); 
        $(".gnb_sub2").addClass("hidden"); 
        $(".gnb_sub").find("*").addClass("hidden"); 
        $(".gnb_sub2").find("*").addClass("hidden"); 
        $(this).children(".gnb_sub").removeClass("hidden");
        $(this).children(".gnb_sub2").removeClass("hidden");
        $(this).children(".gnb_sub").find("*").removeClass("hidden");
        $(this).children(".gnb_sub2").find("*").removeClass("hidden");
        //$(this).children(".gnb_sub2").css({"opacity":"1","left":"230px","width":"800px","height":"auto","padding-bottom":"50px","z-index":"10"});
        //$(this).children(".gnb_sub").css({"width":"800px","height":"50px","left":"230px",
                        //                  "opacity":"1","transform":"rotate(0deg)","transition":"all 0.4s"});
        
    });  
    $("#gnb>li").on("mouseleave focusout" ,function(){
        $(".gnb_sub").addClass("hidden");//gnb 컨텐츠 없애기
        $(".gnb_sub2").addClass("hidden");//gnb 컨텐츠 없애기
        $(".gnb_sub").find("*").addClass("hidden");//gnb 컨텐츠 없애기
        $(".gnb_sub2").find("*").addClass("hidden");//gnb 컨텐츠 없애기
  });
    $(window).resize(function(){
        $(".gnb_sub").addClass("hidden");//gnb 컨텐츠 없애기
        $(".gnb_sub2").addClass("hidden");//gnb 컨텐츠 없애기
        $(".gnb_sub").find("*").addClass("hidden");//gnb 컨텐츠 없애기
        $(".gnb_sub2").find("*").addClass("hidden");//gnb 컨텐츠 없애기
    });
//gnb 모바일
    $(".gnb_m_sub").slideUp();
    //모바일  li 클릭
    $(".gnb_m>li>a").stop().on("click focusin" ,function(){
    $(this).siblings(".gnb_m_sub:not(:animated)").stop().slideToggle();
    return false;
    }) //마우스오버: 자기 밖으로 나간 자식 인정안함
    //마우스엔터 : 자기 밖으로 나간 자식 인정함. 
    $(".play_arrow4").css({"transform":"rotate(44deg)","transition":"all 0.3s","width":"0px"}); //햄버거버튼 초기설정
    $(".play_arrow5").css({"transform":"rotate(-44deg)","transition":"all 0.3s","width":"0px"});

    $(".gnb_m").animate({"marginLeft" : "-200px"}); //모바일 메뉴 초기설정
    //햄버거 버튼 클릭 시 설정
    $(".m_play").on("click focusin" ,function(){
    if($(".gnb_m").css("marginLeft") == "-200px")
    {
        $(".m_play").css({"transform":"rotate(-180deg)"});
        $(".gnb_m").animate({"marginLeft" : "0px"});
    $(".play>a>img").attr("src","img/arrow_stop.png");

      $(".play_arrow1").css({"transition":"all 0.3s","width":"0px"});
      $(".play_arrow3").css({"transition":"all 0.3s","width":"0px"});
     $(".play_arrow4").css({"transform":"rotate(-45deg)","transition":"all 0.3s","width":"28px"});
    $(".play_arrow5").css({"transform":"rotate(45deg)","transition":"all 0.3s","width":"28px"});
         $(".gnb_m_sub").slideUp();
    }

    else if($(".gnb_m").css("marginLeft") == "0px")
    { 	$(".m_play").css({"transform":"rotate(0deg)"});
        $(".gnb_m").animate({"marginLeft" : "-200px"})
        $(".m_play>a>img").attr("src","img/arrow_play.png");
     $(".play_arrow1").css({"transition":"all 0.3s","width":"40px"});
      $(".play_arrow3").css({"transition":"all 0.3s","width":"40px"});
         $(".play_arrow4").css({"transform":"rotate(45deg)","transition":"all 0.3s","width":"0px"});
    $(".play_arrow5").css({"transform":"rotate(-45deg)","transition":"all 0.3s","width":"0px"});

    }

    return false;
    });








});