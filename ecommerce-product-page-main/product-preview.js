
$(document).ready(function(){
    //根据窗口大小改变样式和页面操作
        if($(window).width()>376){
            $(".product-images-card .formobile a img").click(function(){
          //点击的图片显示在区域内
                var reg=/-thumbnail.jpg/g;
                var newsrc=$(this).attr("src");
               var newsrc=newsrc.replace(reg,".jpg");
                $(".product-images-card #place-preview img").attr("src",newsrc)
            })
            //区域内图片被点击后，放大
            $("#place-preview a").click(function(){
                var bigimg=$(".product-images-card").html();
                $("<section  class='product-images-card-big'><a href='#' class='close-img'><img src='./images/icon-close.svg'></a>"+bigimg+"</section>").insertAfter("header").css({"position":"absolute","width":"fit-content","transform":"scale(1.2)","left":"35%","z-index":"1"});
                $("section,header").not(".product-images-card-big").css({"opacity":"0.4"});
                $(".product-images-card-big img").css({"border-radius":"7px"});
                $(".close-img").css({"float":"right"});
                $(".close-img").click(function(){
                 $(".product-images-card-big").hide();
                 $("section,header").css({"opacity":"1"});
              })
              $(".product-images-card-big .formobile a img").click(function(){
 
                 var reg=/-thumbnail.jpg/g;
                 var newsrc=$(this).attr("src");
                var newsrc=newsrc.replace(reg,".jpg");
                 $(".product-images-card-big #place-preview  img").attr("src",newsrc)
             })
                 })
                 
        }else{//mobile时，图片slider式展示
            $("#place-preview").attr("position","relative");
    $("#next,#previous").css({"display":"block","transform":"scale(0.1)","background-color":"white","border-radius":"50%",});
    $(".img-btn img").css({"transform":"scale(0.3)"});

    var num=1;
   $("#next").click(function(){
    if(num<4){num++}
    $("#place-preview .img-responsive").attr("src","./images/image-product-"+num+".jpg")})
    $("#previous").click(function(){
    if(num>1){num--}
    $("#place-preview .img-responsive").attr("src","./images/image-product-"+num+".jpg")})
        //点击三横线menu，显示side-bar
        $("#formobile-menu img").click(function(){
            var ul=$("ul").html();
            $("<div class='side-bar'><ul>"+ul+"</ul></div>").insertAfter("header").css({"position":"fixed","background-color":"white","z-index":"1"});
            $("<a href='#' class='close-img'><img style='margin-left:1em'width='10'height='10'src='./images/icon-close.svg'></a>").insertBefore(".side-bar ul");
            $(".side-bar").css({"position":"absolute","top":"0","width":"60%","height":"100%"});
            $(".side-bar ul").css({"display":"unset","height":"50%"});
            $(".side-bar li ").css({"float":"unset","margin-left":"1em","height":"3em",});
            $(".side-bar li a").css({"color":"black","font-weight":"700"});
            $("section,header").css({"background":"hsl(0, 0%, 0%,0.7)"});
            $(".add-to-cart,.user,#place-preview,p").css({"opacity":"0.1"});
    
            $(".side-bar .close-img").click(function(){
                $(".side-bar").hide();
                $("section,header").css({"background":"transparent"});
                $(".add-to-cart,.user,#place-preview,p").css({"opacity":"1"});
            })})
        }

        //无论屏幕大小如何，购物车功能操作一样
        //先让购物车框消失
        $(".text-center").show();
        $("#cart-preview").hide();
        $(".cart-content").hide();
        $("#cart-preview button").hide();
       
     //购物车显示时信息是空还是计算的总金额
    
         //将选择的数量通过按下“加入购物车”按钮改变购物车内数量
         $("#btn-for-add").click(function(){
            cal();
         })
         //定义一个函数，然后引用，减少重复
         function cal(){
            var num=$("#number").text();
            $("#num-added").text(num);
            var result=eval("125*"+num);
          $("#result").text("$"+result+".00");}
            //清空购物车，以及清空后重新添加
          $("#delete-cart").click(function(){
            $("#number").text(0);
            $("#num-added").text(0);
                $(".text-center").show();
                $(".cart-content").hide();
                $("#cart-preview button").hide();
                $("#btn-for-add").click(function(){
                    cal();
                    $(".text-center").hide();
                    $(".cart-content").show();
                    $("#cart-preview button").show();
                 })
            })
         

//分歧点

$("#cart-for-check").click(function(){
    if($("#num-added").text()==0){
        $("#cart-preview").toggle();
        $(".text-center").show();
        $(".cart-content").hide();
        $("#cart-preview button").hide();}
        else{ $("#cart-preview").toggle();
            $(".text-center").hide();
        $(".cart-content").show();
        $("#cart-preview button").show();
        }
})
    
        $("#minus").click(function(){
            if($("#number").text()>0){
                var pre=$("#number").text();
            var res=eval(pre+"-1");
            $("#number").text(res);
            }      
        })
        $("#plus").click(function(){
            var pre=$("#number").text();
            var res=eval(pre+"+1");
            $("#number").text(res);
        })
       
    
    
    })
        
