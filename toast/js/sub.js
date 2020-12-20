$(function(){
    var size_ck = 0;
   
   /* function marginT(){
        for(var i=0;i<20;i++)
        {

            j = 3*i;
            console.log(j);
            $(".sub-tab").children("li:nth-child("+j+")").css({"marginRight":"0px"});
        }
    };*/
     /*function marginM(){
        for(var i=0;i<20;i++)
        {

            j = 2*i;
            console.log(j);
            $(".sub-tab").children("li:nth-child("+j+")").css({"marginRight":"0px"});
        }
    };
    if($(window).width()>900){
                marginT()
           }
        else if($(window).width()<=900){

               marginM(); 
        };
    $(window).resize(function(){
        if($(window).width()>900){
            $(".sub-tab").children("li:nth-child(2n)").css({"marginRight":"30px"});
                marginT();
           }
        else if($(document).width()<=900){
            $(".sub-tab").children("li:nth-child(3n)").css({"marginRight":"2%"});
               marginM(); 
        };
    });*/
 
    //탭
    $(".sub-tab").hide();
    $(".sub-tab").eq(0).fadeIn();
    $(".tab-bar>li>a").click(function(){
        $(".tab-bar").find("a").removeClass("selected");
        $(this).addClass("selected");
        $(".sub-tab").fadeOut();
        var tab_num = parseInt($(this).parent("li").index());
        var tab_show = $(".sub-tab").eq(tab_num);
            tab_show.fadeIn();
        console.log(tab_num);
        return false;
    })
})