$(function(){
   $("form").submit(function(){
       $("form").find("p").each(function(){
       if($(this).find("input").val()==""){
           var value_name = $(this).find("label").text();
           alert(value_name + "을(를) 입력해주세요");
           return false;
       }   
     });
     if($("#userpass").val()!=$("#userpass2").val()){
         $(".pass2>span").remove();
         alert("비밀번호가 일치하지 않습니다.")
         $(".pass2").append("<span>비밀번호가 일치하지 않습니다.</span>");
         return false;
     };
     if($("#mail-select").val() == "" && $("#usermail2").val() == ""){
        alert("메일 도메인주소를 입력해주세요");
        return false;
     };
   });
    $("#mail-select").change(function(){
        var maildomain = String($("#mail-select option:selected").val());
        console.log($("#usermail2").val());
         $("form #usermail2").val(maildomain);
    }); 
});