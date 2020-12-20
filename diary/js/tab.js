jQuery(document).ready(function(){
        $(".tabContents1").show();
		$("#tabMenu").each(function(){
		
			var bar = $(".tabBar").find("a");
			var tab = $("#tabMenu").find("div");
			
			$(".tabBar a").click(function(){
				event.preventDefault();
				bar.removeClass("on");
				$(this).addClass("on");
				
				tab.hide();
				$($(this).attr("href")).show();
				
				
			})
			
		})
    });
