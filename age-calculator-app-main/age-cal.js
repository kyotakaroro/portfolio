const currentyear=new Date().getFullYear();

//定义
let day_ele="";
let  month_ele="";
let year_ele="";
const day_input=document.getElementById("day");
const month_input=document.getElementById("month");
const year_input=document.getElementById("year");
//监听input事件
//day
day_input.addEventListener("input",()=>{
    day_ele=day_input.value.trim();
})
//month
month_input.addEventListener("input",()=>{
    month_ele=month_input.value.trim();     
})
//year
year_input.addEventListener("input",()=>{
    year_ele=year_input.value.trim(); 
  
})
//计算
function age_cal(){
 //如果输入有误，则不进行计算！
 const myNode = document.querySelector('p');
if (myNode) {
    return false
}else{
    //涉及计算的部分
  let birthDateStr= year_ele+"-"+month_ele+"-"+day_ele;
  const birthDate=new Date(birthDateStr);
    const ageInMs = Date.now() - birthDate.getTime();
    const days = Math.floor(ageInMs / (1000 * 60 * 60 * 24 ));//1s=1000ms
    let year_result=document.getElementById("year-display");
    let month_result=document.getElementById("month-display");
    let day_result=document.getElementById("day-display");
    //计算有几个闰年
    let leapYears = 0;
//按照公历规定，闰年是指能够被4整除的年份为普通闰年，但是对于100的倍数年份，只有能够被400整除的才是闰年。例如，2000年是闰年，因为它既是4的倍数又是400的倍数；而1900年不是闰年，因为它是100的倍数但不是400的倍数。
const birthYear = birthDate.getFullYear();
for (let i = birthYear; i < new Date().getFullYear(); i++) {
if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) {
 leapYears++;
}
}
const result=(days-leapYears*366)/365+leapYears;

//计算年
year_result.innerHTML=Math.floor(result);
//计算月
let months_ele=Math.floor(result%1*12);
month_result.innerHTML=months_ele;
//计算日
let days_ele=Math.floor((result%1*12)%1*30.4);
day_result.innerHTML=days_ele;
}


} 

function checkyear(){//先删除节点以免造成累加
    const year_parent=year_input.parentNode;
    const myNode = year_parent.querySelector('p');
if (myNode) {
   year_parent.removeChild(year_parent.childNodes[2]);
}
if(year_ele==""||parseInt(year_ele) != year_ele||year_ele>currentyear||year_ele<0){
        year_input.classList.add("error1");
        year_parent.classList.add("error2");
    } else{year_input.classList.remove("error1");
    year_parent.classList.remove("error2");}
         //如果为大于今年年份的数字
      if(year_ele>currentyear){
       var para = document.createElement("p");
       var node = document.createTextNode("Must be in the past");
       para.appendChild(node);
       year_parent.appendChild(para);
      }
      //如果为空
      else if(year_ele==""){
       var para = document.createElement("p");
       var node = document.createTextNode("This field is required.");
       para.appendChild(node);
       year_parent.appendChild(para);
      }
      else if(year_ele<0||parseInt(year_ele) != year_ele){
       var para = document.createElement("p");
       var node = document.createTextNode("Must be a valid year");
       para.appendChild(node);
       year_parent.appendChild(para);
      }
      else{
        year_parent.removeChild(year_parent.childNodes[2]);
    }
}
    


function checkmonth(){
    const month_parent=month_input.parentNode;
    const myNode = month_parent.querySelector('p');
if (myNode) {
   month_parent.removeChild(month_parent.childNodes[2]);
}
var reg=/^(0?[1-9]|1[0-2])$/; //01~09,10~12
 if(month_ele==""){
    month_input.classList.add("error1");
    month_parent.classList.add("error2");
    var para = document.createElement("p");
    var node = document.createTextNode("This field is required.");
    para.appendChild(node);
    month_parent.appendChild(para);
  }
 if(month_ele!=""&&reg.test(month_ele)==false){
        month_input.classList.add("error1");
    month_parent.classList.add("error2");
    var para = document.createElement("p");
    var node = document.createTextNode("Must be a valid month");
    para.appendChild(node);
    month_parent.appendChild(para);}
   if(reg.test(month_ele)==true){
    month_input.classList.remove("error1");
    month_parent.classList.remove("error2");
    month_parent.removeChild(month_parent.childNodes[2]);
    }
}
function checkday(){
    const day_parent=day_input.parentNode;
    const myNode = day_parent.querySelector('p');
if (myNode) {
   day_parent.removeChild(day_parent.childNodes[2]);
}
var reg=/^((0?[1-9])|((1|2)[0-9])|30|31)$/;
if(day_ele==""){
    day_input.classList.add("error1");
    day_parent.classList.add("error2");
    var para = document.createElement("p");
    var node = document.createTextNode("This field is required.");
    para.appendChild(node);
    day_parent.appendChild(para);
    }
if(day_ele!=""&&reg.test(day_ele)==false){
    day_input.classList.add("error1");
    day_parent.classList.add("error2");
    var para = document.createElement("p");
    var node = document.createTextNode("Must be a valid day");
    para.appendChild(node);
    day_parent.appendChild(para);
} 
if(reg.test(day_ele)==true){
    day_input.classList.remove("error1");
    day_parent.classList.remove("error2");
    day_parent.removeChild(day_parent.childNodes[2]);
    }

}