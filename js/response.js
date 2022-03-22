$(function(){
    $(widow).resize(function(){
        if($(window).width()<=1430){
            $(window).scroll(function(){
                loadview();
            });
        };
    });
            
});            
$(window).scroll(function(){
    logodel();
    var sectionTop = parseInt($("#profile-wrap").offset().top);
    console.log("sectionTop"+sectionTop);
    //if($(window).scrollTop()==sectionTop){
    //	$("#profile-wrap").children().fadeOut();

        
    //};
    var size = $('section').size();//갯수
    $('section').on('mousewheel',function(event,delta){
        if(delta>0 && $(this).index()>=1){
            var present = $(this).prev();
            pageshow(present);
            var presentTop = present.offset().top;
            $('html,body').stop().animate({'scrollTop':presentTop},2000,'easeOutExpo')
             if(delta>0 && $(this).index()==1){
                clearInterval(textset);
                slideText();
            };
        }else if(delta<0 && $(this).index()<3){
            var present = $(this).next();
            pageshow(present);
            var presentTop = present.offset().top; 
            $('html,body').stop().animate({'scrollTop':presentTop},2000,'easeOutExpo')
            if(delta<0 && $(this).index()==0){
                clearInterval(textset);
            };
        }else if(delta<0 && $(this).index()==3){
            var present = $("#footer-wrap");
            pageshow(present);
            var presentTop = present.offset().top;
            $('html,body').stop().animate({'scrollTop':presentTop},2000,'easeOutExpo')
        };
        

    });
    $('#footer-wrap').on('mousewheel',function(event,delta){
        if(delta>0){
            var present = $("section").eq(3);
            pageshow(present);
            var presentTop = present.offset().top;
            $('html,body').stop().animate({'scrollTop':presentTop},2000,'easeOutExpo');
            
            
        };
    
    });
});		