$(document).ready(function(){
    $("#for-input input").keydown(function(ele){
        var text=$("#for-input input").val();
        if(ele.keyCode==13&&text!=""){
            $("#for-display").css({"opacity":"1"})
            //不能用循环因为没有条件，要用random（），注意label的for也要改。
            var i=Math.floor((Math.random()*100)+1);
                $("#for-display ul").append(" <li class='active'><input type='checkbox' id='checkbox"+i+"'><label for='checkbox"+i+"'></label><span>"+text+"</span><a><img src='./images/icon-cross.svg'></a></li>")
             //X items left
        $("#number").text($("ul").children().length)
            $("#for-input input").val("");
            //checked or not
            $("#checkbox"+i).click(function(){
                if($(this).is(":checked")==true)
                {$("li").has(this).css({"text-decoration":"line-through"})
                $("li").has(this).addClass("completed");}
                else{$("li").has(this).css({"text-decoration":"none"})
                $("li").has(this).removeClass("completed")
                }
            })
                //分类选择
            $("#all").click(function(){
                $("li").show()
            })
            $("#active").click(function(){
                $("input[type='checkbox']").filter(":checked").parent().hide()
                $("input[type='checkbox']").not(":checked").parent().show()
            })
            $("#completed").click(function(){
                $("input[type='checkbox']").filter(":checked").parent().show()
                $("input[type='checkbox']").not(":checked").parent().hide()
            })
            $("#clear-completed").click(function(){
                $("input[type='checkbox']").filter(":checked").parent().remove();
                     //X items left
                    $("#number").text($("ul").children().length)
                   
            })  
            //cross删除功能
            $("li a").click(function(){
                $(this).parent().remove()
                $("#number").text($("ul").children().length)
            })
            //拖拽功能（要在html引入新的地址）
            $(function() {
                $( "ul" ).sortable();
                $( "ul" ).disableSelection();
              });
    }
    
    
})

})
