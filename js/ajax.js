$(function(){
    $(".web-list>li").click(function(){
        var dataName = $(this).data("name");
        var webinfo = $('<div/>');
        var ul = $('<ul/>');
        var modal =   $('<div/>');
        webinfo.attr("class","web-info");
        modal.attr("class","modal");
        $(".wrap").prepend(webinfo);
        $(".wrap").prepend(modal);
        $(".modal").fadeIn(1000);
        $(".web-info").fadeIn(1000);
    
        $.ajax({
            type : "GET",            // HTTP method type(GET, POST) 형식이다.
            url : "https://ltk-92.github.io/poliotest/js/"+dataName+".json",      // 컨트롤러에서 대기중인 URL 주소이다.         
            dataType: "json", // Json 형식의 데이터이다.
            success : function(info){ // 비동기통신의 성공일경우 success콜백으로 들어옵니다. 'res'는 응답받은 데이터이다.
                // 응답코드 > 0000
                
             // 데이터 =info
            // load = info
            // console.log(load);
            // webinfo.text(info);
                 $.each(info, function (index, item){
                    var info_img = item.img;
                    var info_title = item.title;
                    var info_text = item.text;
                    var info_text2 = item.text2;
                    var link = item.link;
                    var linkName = item.linkName;
                    var listColor = item.listColor;
                    var btnClass= item.class;
                    var img = $("<img/>");
                    img.attr("src","img/"+info_img);
                    var title = $('<p />').text(info_title);
                    title.attr("class","info-title");
                    var text = $('<p />').html(info_text);
                    var text2 = $('<p />').html(info_text2);
                    var infoCon = $("<div />");
                    ul.attr("class",listColor);
                    //var td = $('<td/>');
                    
                    //var a = $("<a/>");

                    for(t=1;t<13;t++){
                       var v = t-1;
                       var links = [];
                       links[v] = eval("item.link"+t);
                       var linkNames = [];
                       linkNames[v] = eval("item.linkName"+t);
                       var a = $("<a/>");
                       a.attr("href",links[v]); 
                       a.text(linkNames[v]);
                       a.attr("target","_blank");
                       var li = $('<li/>');
                       li.append(a);
                       li.attr("class",btnClass);
                       ul.append(li); 
                             
                    };
                    console.log("links"+v+links[v]);
                    console.log("linkNames"+v+linkNames[v]);      
                    infoCon.attr("class","info-con");
                    infoCon.append(img);
                    infoCon.append(title);
                    infoCon.append(text);
                    infoCon.append(text2);
                    webinfo.append(infoCon);
                    $(".info-con").find("p:empty").remove();
                    $(".info-con").find("img[src='img/undefined']").remove();
                    console.log("img:"+img);
                    console.log("title:"+title);
                    console.log("text:"+text);
                     
                    infoCon.append(ul);
                   
                    
                    $(".info-con").find("a:empty").parent("li").remove();
                   // $(".info-con").find("tr:empty").remove();          
                 })
            },
            error : function(){ // 비동기 통신이 실패할경우 error 콜백으로 들어옵니다.
                alert("통신 실패.")
            }    
        });
        $('.modal').click(function(){
           $(".modal").fadeOut(500, function(){
                $(".modal").remove();
            });
           $(".web-info").fadeOut(500, function(){
                $(".web-info").delay(600).remove();
            });
       });//end modal
    });
     
});
