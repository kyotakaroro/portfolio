
function showNum(num){
    var text=num.getAttribute("value");
    var selectedone=document.getElementById("number-selected");
    selectedone.firstChild.nodeValue=text;
}

function switchView(){
    var selected= document.getElementsByTagName("span")[0].childNodes[0].nodeValue;
    if(selected!=="(num)"){
        document.getElementById('thankyou-state').style.display='unset';
        document.getElementById('rating-state').style.display='none';
    }else{alert("Please give a rate!");}
   
   }

   

  

