//for-comments-input获取json的内容
async function fetchData() {
    var response = await fetch('./data.json');
    var json = await response.json();
    return json;
  }
  fetchData()
    .then(function(result) {
      //id1的评论和id2的评论（采用for-each）
    const dataContainer_inset = document.getElementById('for-inset');

      result.comments.forEach(comment => {
      const commentElement = createCommentElement(comment);
      dataContainer_inset.appendChild(commentElement);
});
    
  //用于生成评论的html的函数
  function createCommentElement(comment) { 
    const newItem = document.createElement('div');
    newItem.className="comment"+comment.id;
    //currentUser的评论的html
    if(comment.user.username==result.currentUser.username){
      newItem.innerHTML = `
  <div class='comment'>
  <ul class='score-btns'>
  <li><button>+</button></li>
  <li><scan class='score'>${comment.score}</scan></li>
  <li><button>-</button></li></ul>
  <div class='user'>
  <img  src='${comment.user.image.png}'>
  <p class='user-name'>${comment.user.username}</p>
  
  <p class='you'>you</p>
  
  <p class='created-time'>${comment.createdAt}</p>
  </div>
  
  <div class='you-btn'><a class='clear'><img src='./images/icon-delete.svg'>Delete</a><a class='edit'><img src='./images/icon-edit.svg'>Edit</a></div>
  
  <p class='content' >${comment.content}</p></div>
  
  `;
    }else{
      newItem.innerHTML = `
      <div class='comment'>
    <ul class='score-btns'>
    <li><button>+</button></li>
    <li><scan class='score'>${comment.score}</scan></li>
    <li><button>-</button></li></ul>
    <div class='user'>
    <img  src='${comment.user.image.png}'>
    <p class='user-name'>${comment.user.username}</p>
    <p class='created-time'>${comment.createdAt}</p>
    </div>
    <a class='reply'><img src='./images/icon-reply.svg'>Reply</a>
    <p class='content' >${comment.content}</p></div>
    <div class='for-comments-input reply-of-comment`+comment.id+`' style='display:none'><img src='`+result.currentUser.image.png+`'><textarea id='current-user-input'></textarea> <button>REPLY</button></div>
    `;
    }
       //id2的评论的回复1和id2的评论的回复2
    if (comment.replies) {
      const repliesElement = document.createElement('div');
      repliesElement.className = 'replies';
      comment.replies.forEach(reply => {
        const replyElement = createCommentElement(reply);
        repliesElement.appendChild(replyElement);
       
      });
      newItem.appendChild(repliesElement);
    }
    return newItem;
   }
  
      //input(textarea)
      const input_html="<img src='"+result.currentUser.image.png+"'><textarea id='current-user-input'></textarea> <button>SEND</button>";
      document.getElementById("for-input").innerHTML=input_html;
    //jquery
    $(document).ready(function(){
      $(".clear").click(function(){
        var item=$(this).parent().parent();
        //弹窗功能：是否删除？
        $(".popup").toggle();
        $(".no").click(function(){
          $(".popup").toggle();
          $(".yes").click(function(){
            $(".popup").toggle();
            item.remove();
          })
        })
        $(".yes").click(function(){
          $(".popup").toggle();
          item.remove();
        })
       })
       //按下send按钮,为json的comment数组添加内容
      
       $("#for-input button").click(function(){
        var objArr=result.comments;
        //要让每个comment对象的id不一样，首先应该找到id的最大值。为此我们要先过滤出回复的comment对象，取出arr数组中最后一项comment的replies的最后一项的id的值
        var arr=objArr.filter((x)=>x.replies.length>0);
        var repliesArr=arr[arr.length-1].replies;
        var num=repliesArr[repliesArr.length-1].id+1
        
        var content=$("#for-input textarea").val();
        var node=document.createElement('div');
        node.className="comment"+num;
        node.innerHTML= `
          <div class='comment'>
          <ul class='score-btns'>
          <li><button>+</button></li>
          <li><scan class='score'>0</scan></li>
          <li><button>-</button></li></ul>
          <div class='user'>
          <img  src='${result.currentUser.image.png}'>
          <p class='user-name'>${result.currentUser.username}</p>
          
          <p class='you'>you</p>
          
          <p class='created-time'>1 minute ago</p>
          </div>
          
          <div class='you-btn'><a class='clear'><img src='./images/icon-delete.svg'>Delete</a><a class='edit'><img src='./images/icon-edit.svg'>Edit</a></div>
          
          <p class='content' >`+content+`</p></div>
          `;
          dataContainer_inset.appendChild(node);
          $("#for-input textarea").val("");
          $(".clear").click(function(){
            var item=$(this).parent().parent();
            //弹窗功能：是否删除？
            $(".popup").toggle();
            $(".no").click(function(){
              $(".popup").toggle();
              $(".yes").click(function(){
                $(".popup").toggle();
                item.remove();
              })
            })
            $(".yes").click(function(){
              $(".popup").toggle();
              item.remove();
            })
           })
           //edit
           var edit_item=$(".edit").parent().parent();
           edit_item.find("p.content").after("<div class='edit-input' style='display:none' ><textarea>"+"</textarea><button>UPDATE</button></div>")
           $(".edit").click(function(){
            var target=$(this).parent().parent().parent();
            var edit_content=target.find("p.content").text();
            if(target.find("p.content").is(':visible')){
              target.find(".edit-input textarea").val(edit_content);
            target.find(".edit-input").toggle();
            target.find("p.content").toggle();
            }
             //按下update按钮，更新内容(注意text和val的区别)
            $(".edit-input button").click(function(){
              var new_content=target.find(".edit-input textarea").val();
              target.find("p.content").text(new_content);
              target.find("p.content").toggle();
              target.find(".edit-input").toggle();
              
            })
           })
       })
       
     //按下Edit按钮，编辑自己发表的内容
         //如果评论下面已经有了edit框，再按一次Edit则删除edit框
         var edit_item=$(".edit").parent().parent();
        edit_item.find("p.content").after("<div class='edit-input' style='display:none' ><textarea>"+"</textarea><button>UPDATE</button></div>")
       $(".edit").click(function(){
        var target=$(this).parent().parent();
        var edit_content=target.find("p.content").text();
        
          target.find(".edit-input textarea").val(edit_content);
        target.find(".edit-input").toggle();
        target.find("p.content").toggle();
        
         //按下update按钮，更新内容(注意text和val的区别)
        $(".edit-input button").click(function(){
          var new_content=target.find(".edit-input textarea").val();
          target.find("p.content").text(new_content);
          target.find("p.content").toggle();
          target.find(".edit-input").toggle();
          
        })
       })
       //按下reply按钮，为comment的replies添加内容
       $(".reply").click(function(){
      var classname=$(this).parent().parent().attr("class");
      $(".reply-of-"+classname).toggle();
       //按下回复框里reply按钮，发表内容
      $(".reply-of-"+classname+" button").click(function(){
        var content=$(".reply-of-"+classname+" #current-user-input").val();
       
          var node="<div class='new-replies'><div class='comment new-reply-of-"+classname+"'><ul class='score-btns'><li><button>+</button></li>  <li><scan class='score'>0</scan></li><li><button>-</button></li></ul><div class='user'><img  src='"+result.currentUser.image.png+"'><p class='user-name'>"+result.currentUser.username+"</p><p class='you'>you</p><p class='created-time'>1 minutes ago</p></div><div class='you-btn'><a class='clear'><img src='./images/icon-delete.svg'>Delete</a><a class='edit'><img src='./images/icon-edit.svg'>Edit</a></div><p class='content' >"+content+"</p></div></div>";
        
           $("."+classname).append(node);
           $(".reply-of-"+classname).toggle();
          $(".reply-of-"+classname+" textarea").val("");
        
      
        //按下Delete按钮，删除自己发表的内容(需要兼顾作用域内外)
         $(".clear").click(function(){
          var item=$(this).parent().parent();
          //弹窗功能：是否删除？
          $(".popup").toggle();
          $(".no").click(function(){
            $(".popup").toggle();
            $(".yes").click(function(){
              $(".popup").toggle();
              item.remove();
            })
          })
          $(".yes").click(function(){
            $(".popup").toggle();
            item.remove();
          })
         })
         //edit
         var edit_item=$(".edit").parent().parent();
           edit_item.find("p.content").after("<div class='edit-input' style='display:none' ><textarea>"+"</textarea><button>UPDATE</button></div>")
           $(".edit").click(function(){
           
            var target=$(this).parent().parent().parent();
            var edit_content=target.find("p.content").text();
            if(target.find("p.content").is(':visible')){
              target.find(".edit-input textarea").val(edit_content);
            target.find(".edit-input").toggle();
            target.find("p.content").toggle();
            }
             //按下update按钮，更新内容(注意text和val的区别)
            $(".edit-input button").click(function(){
              var new_content=target.find(".edit-input textarea").val();
              target.find("p.content").text(new_content);
              target.find("p.content").toggle();
              target.find(".edit-input").toggle();
              
            })
           })
          
      })
      $(".clear").click(function(){
        var item=$(this).parent().parent();
        //弹窗功能：是否删除？
        $(".popup").toggle();
        $(".no").click(function(){
          $(".popup").toggle();
          $(".yes").click(function(){
            $(".popup").toggle();
            item.remove();
          })
        })
        $(".yes").click(function(){
          $(".popup").toggle();
          item.remove();
        })
       })
       })
    
    })
    
    })
      
    .catch(function(error) {
      console.log(error); // 输出错误信息
    });
    //消除输入框滚动条
    var textarea = document.querySelector('textarea');
    textarea.addEventListener('input', (e) => {
        textarea.style.height = '70px';
        textarea.style.height = e.target.scrollHeight + 'px';
    });