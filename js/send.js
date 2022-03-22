$(function(){
    $("form").submit(function(){
        if($(":text").val()=="" || $("input[type=email]").val()==""){
            alert("내용을 입력해주세요")
        }
    });
});