jQuery(document).ready(function(){
        
		
		
			var bar = $(".tabBar").find("a");
			var tab = $("#tabMenu").find(".tabContents");
			var lastBar = $(".tabBar").find(".on");
			var lastTab = $(lastBar.attr("href"));
			lastTab.show();
			bar.click(function(event){
				event.preventDefault();
				
				bar.removeClass("on");
				$(this).addClass("on");
				var currentTab =$($(this).attr("href"));
				
				
				lastTab.slideUp(500, function(){
					
					currentTab.slideDown();
					lastTab = currentTab;
				});
				
				
				
			});
			
		
    });
