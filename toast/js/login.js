$(function(){
     $("form").submit(function(){
        if($("#sukbong-id").val()==""){
            alert("아이디를 입력해주세요.")
           };
        if($("#sukbong-pass").val()==""){
            alert("비밀번호를 입력해주세요.")
           };    
    });//미입력시 알림창
    $("#sukbong-id").focus(function(){
        $(this).css("outline","3px solid #419400");
        $(this).attr("placeholder","");
    })
     $("#sukbong-id").blur(function(){
        $(this).css("outline","0");
         $(this).attr("placeholder","아이디를 입력해주세요");
    })
    $("#sukbong-pass").focus(function(){
        $(this).css("outline","3px solid #419400");
        $(this).attr("placeholder","");
    })
     $("#sukbong-pass").blur(function(){
        $(this).css("outline","0");
         $(this).attr("placeholder","비밀번호를 입력해주세요");
    })
});