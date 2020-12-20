$(function(){
 $(".brand-story-con1").find("p").hide();
 $(".brand-story-con2").find("p").hide();
 $(".brand-story-con3").find("p").hide();
 b = 301;
 t = 100000001;       
 $(window).scroll(function(){
      console.log($(window).scrollTop());
    if(
        parseInt($(window).scrollTop())>0&&
        parseInt($(window).scrollTop())<700
      ){
         $(".brand-story-con1").find("p:first").fadeIn(800);
         $(".brand-story-con1").find("p:last").delay(500).fadeIn(500);   
     }
     if(
         parseInt($(window).scrollTop())>700&&
         parseInt($(window).scrollTop())<1200
       ){
        // $(".brand-story-con3").animate({
          //   "background-positionX":"-2000px",
         //    "background-positionY":"center"
         //},500);
         $(".brand-story-con2").addClass("ani");
         $(".brand-story-con2>article").addClass("ani");
          $(".brand-story-con2").find("p:first").delay(500).fadeIn(500);
         $(".brand-story-con2").find("p:last").delay(100).fadeIn(500);
      
     };
      if(
         parseInt($(window).scrollTop())>1200&&
         parseInt($(window).scrollTop())<2100
       ){
         
          $(".brand-story-con3>article").addClass("ani");
          $(".brand-story-con3").find("p:first").fadeIn(800);
          $(".brand-story-con3").find("p").eq(1).delay(500).fadeIn(800);
         $(".brand-story-con3").find("p:last").delay(1000).fadeIn(500);
       
     };
       if(
         parseInt($(window).scrollTop())>2100){
        $(".number-box:first").children("p:last").addClass("b_ani");
        $(".number-box:last").children("p:last").addClass("t_ani");
        b = 0;
        t = 0;   
     };    
  });
     
     var timer1;
     var timer2;
     function b_timer (){
            
            timer1 = setInterval(function(){
            b += 2000000;
            if(b == 100000000 ){clearInterval(timer1)};
            $('.b_ani').text(b);
            }, 100);
         
        };
         function t_timer (){
             
            
            timer2 = setInterval(function(){
            t += 10;
            if(t == 300){clearInterval(timer2)};
            $('.t_ani').text(t);    
            }, 100);
             
        }
        
        t_timer();
        b_timer();
    
})