
        //按下Edit按钮，编辑自己发表的内容；按下update按钮，更新内容
         //如果评论下面已经有了edit框，再按一次Edit则删除edit框
         var target=$(this).parent().parent();
        var node=document.createElement('div');
        node.innerHTML=`
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
          
          <textarea class='content' >`+content+`</textarea></div>
          `;
        target.append(node)

         var objArr=result.comments;
        //要让每个comment对象的id不一样，首先应该找到id的最大值。为此我们要先过滤出回复的comment对象，取出arr数组中最后一项comment的replies的最后一项的id的值
        var arr=objArr.filter((x)=>x.replies.length>0);
        var repliesArr=arr[arr.length-1].replies;
        
          result.comments.push({
            "id": repliesArr[repliesArr.length-1].id+1,
            "content":document.getElementById("current-user-input").value() ,
            "score": 0,
            "user": {
              "image": { 
                "png": result.currentUser.image.png,
                "webp":  result.currentUser.image.webp
              },
              "username": result.currentUser.username
          },
          "replies": []});
          var node=document.createElement('div');
          node.className="comment"+result.comments[objArr.length-1].id;
          node.innerHTML= `
          <div class='comment'>
          <ul class='score-btns'>
          <li><button>+</button></li>
          <li><scan class='score'>${result.comments[objArr.length-1].score}</scan></li>
          <li><button>-</button></li></ul>
          <div class='user'>
          <img  src='${result.comments[objArr.length-1].user.image.png}'>
          <p class='user-name'>${result.comments[objArr.length-1].user.username}</p>
          
          <p class='you'>you</p>
          
          <p class='created-time'>${result.comments[objArr.length-1].createdAt}</p>
          </div>
          
          <div class='you-btn'><a class='clear'><img src='./images/icon-delete.svg'>Delete</a><a class='edit'><img src='./images/icon-edit.svg'>Edit</a></div>
          
          <p class='content' >${result.comments[objArr.length-1].content}</p></div>
          `;
          dataContainer_inset.appendChild(node);

          $(".score-btns button").click(function(){
            var target=$(this).parent().parent()
            var str=$(this).text();
              var num =target.find(".score").text();
              var res=eval(num+str+"1")
              alert(res)
          })
