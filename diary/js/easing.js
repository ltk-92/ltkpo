jQuery(document).ready(function(){
     $("button").click(function(){
		 var easing = $('select > option:selected').html();
		 $("div").animate({left:'500px'},500,easing).animate({left:'0px'},500,easing);
		 
	 });
    });