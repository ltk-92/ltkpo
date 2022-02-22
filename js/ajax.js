//jQuery(document).ready(function(){
//		var tbody = $('#tbody');
//		$.getJSON('data.json', function(people){
//			$.each(people,function(i,person){
//				var text_no = person.no;
//				var text_name = person.name;
//				var text_mail = person.mail;
//				var tr = $('<tr />');
//				var no = $('<td />').text(text_no);
//				var name = $('<td />').text(text_name);
//				var mail = $('<td />').text(text_mail);
//				tr.append(no);
//				tr.append(name);
//				tr.append(mail);
//				tbody.append(tr);
				
				
				
//			});
		
//		});
//});

jQuery(document).ready(function(){
    var webinfo = $('.web-info');
    $.getJSON('./js/webinfo.json', function(info){
        $.each(info,function(i,info){
            var info_img = info.img;
            var info_title = info.title;
            var info_text = info.text;
            var img = $('<img />').attr("src", info_img);
            var title = $('<p />').text(info_title);
            var text = $('<p />').text(info_text);
            var infoCon = $('.info-con');
            infoCon.append(img);
            infoCon.append(title);
            infoCon.append(text);
            webinfo.append(infoCon);
            
            
            
        });
    
    });
});