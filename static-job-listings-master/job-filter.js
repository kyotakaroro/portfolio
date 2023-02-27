$(document).ready(function(){
    $("button").click(function(){
        $(".here").css({"display":"unset"})
    
        var text=$(this).text();
        if($(".here button").text().search(text)>=0){return false}else{$(".here").append("<div class='here-tab'><button>"+text+"<button class='cancel' id='"+text+"'>x</button>"+"</button></div>");}
        
       
        $("article").not("."+text).hide().addClass("for"+text);
       
        $(".cancel").click(function(){
            var worddel=$(this).attr("id");
            $("article").removeClass("for"+worddel);
            $(this).parent().remove();
           $("article").filter(function(){
            return $(this).attr("class").search("for")==-1;
           }).show();
        })
        
    }
    )
    $(".clear").click(function(){
        $(".here button").remove();
        $("article").show();
        $(".here").css({"display":"none"})
    })
})
