var buttons=document.getElementsByClassName("button");
var arr=[...buttons];
arr.forEach((element,index)=>
        element.addEventListener("click",()=>
        {element.style.opacity="1";
        var ele_body=document.getElementsByTagName("body")[0];
        var ele_main=document.getElementsByTagName("main")[0];
        var tri_state=document.getElementsByClassName("tri-state")[0];
       
        var cal_result=document.getElementsByClassName("calculator-result")[0];
        var cal_keys=document.getElementsByClassName("calculator-keys")[0];
       var reset=document.getElementsByClassName("reset")[0];
       var equal=document.getElementsByClassName("key--equal")[0];
        if(index==0){
            document.getElementById("one").style.backgroundColor="hsl(6, 63%, 50%)";
            ele_body.style.cssText="background-color:hsl(222, 26%, 31%)";
            ele_main.style.cssText="color:hsl(0, 0%, 100%)";
            tri_state.style.cssText="background-color:hsl(223, 31%, 20%)";
            cal_result.style.cssText="background-color:hsl(224, 36%, 15%);color:hsl(0, 0%, 100%);"
            cal_keys.style.cssText="background-color:hsl(223, 31%, 20%)";
            //如何给多个子元素设定同样的CSS：
            document.querySelectorAll('.calculator-keys > button').forEach(button => {
                button.style.backgroundColor="hsl(30, 25%, 89%)"
                button.style.color="hsl(221, 14%, 31%)"
                button.style.boxShadow="0em 0.2em  hsl(28, 16%, 65%);"
            })//设置css的排列顺序也很重要
            reset.style.cssText="background-color:hsl(225, 21%, 49%);box-shadow:0em 0.2em hsl(224, 28%, 35%);"
            equal.style.cssText="background-color:hsl(6, 63%, 50%);box-shadow:0em 0.2em hsl(6, 70%, 34%);"
        }
        if(index==1){
            document.getElementById("two").style.backgroundColor="hsl(0, 5%, 81%)";
            ele_body.style.cssText="background-color:hsl(0, 0%, 90%)";
            ele_main.style.cssText="color:hsl(60, 10%, 19%)";
            tri_state.style.cssText="background-color:hsl(0, 5%, 81%)";
            cal_result.style.cssText="background-color:hsl(0, 0%, 93%);color:hsl(60, 10%, 19%)";
            cal_keys.style.cssText="background-color: hsl(0, 5%, 81%)";
            document.querySelectorAll('.calculator-keys > button').forEach(button => {
                button.style.backgroundColor=" hsl(45, 7%, 89%)";
            })
            
            document.querySelectorAll('.calculator-keys > button').forEach(button => {
                button.style.backgroundColor="hsl(45, 7%, 89%);"
                button.style.color="hsl(60, 10%, 19%)"
                button.style.boxShadow="0em 0.2em  hsl(35, 11%, 61%);"
            })
            reset.style.cssText="background-color:hsl(185, 42%, 37%);box-shadow:0em 0.2em hsl(185, 58%, 25%)"
            equal.style.cssText="background-color:hsl(25, 98%, 40%);box-shadow:0em 0.2em hsl(25, 99%, 27%)"
        }
        if(index==2){
            document.getElementById("three").style.backgroundColor="hsl(176, 100%, 44%)";
            ele_body.style.cssText="background-color:hsl(268, 75%, 9%)";
            ele_main.style.cssText="color:hsl(52, 100%, 62%)";
            tri_state.style.cssText="background-color:hsl(268, 71%, 12%)";
            cal_result.style.cssText="background-color:hsl(268, 71%, 12%);color:hsl(52, 100%, 62%);";
            cal_keys.style.cssText="background-color: hsl(268, 71%, 12%)";
            
            document.querySelectorAll('.calculator-keys > button').forEach(button => {
                button.style.backgroundColor="hsl(281, 89%, 26%)";
                button.style.color="hsl(52, 100%, 62%)"
                button.style.boxShadow="0em 0.2em   hsl(177, 92%, 70%);"
                
            })
            reset.style.cssText="background-color:hsl(281, 89%, 26%);box-shadow:0em 0.2em hsl(285, 91%, 52%);color:hsl(0, 0%, 100%)"
            equal.style.cssText="background-color: hsl(176, 100%, 44%);box-shadow:0em 0.2em  hsl(177, 92%, 70%);color:hsl(198, 20%, 13%);"
        }
        arr.filter(function(item){
            return item!=element;
        }).forEach((item=>{item.style.opacity="0";}))}))
//以下为计算器
const calculate=(n1,operator,n2)=>{
    const firstNum=parseFloat(n1);
    const secondNum=parseFloat(n2);
    if (operator === 'add') return firstNum + secondNum
      if (operator === 'subtract') return firstNum - secondNum
      if (operator === 'multiply') return firstNum * secondNum
      if (operator === 'divide') return firstNum / secondNum
  }
  
  const calculator=document.querySelector(".calculator");
  const keys=calculator.querySelector(".calculator-keys");
  const display=calculator.querySelector(".calculator-result");
  
  keys.addEventListener("click",ele=>{
    if(ele.target.matches("button")){
          const key=ele.target;
          const action=key.dataset.action;
          const keyContent=key.textContent;
          const displayedNum=display.textContent;
          const previousKeyType=calculator.dataset.previousKeyType;
    
    Array.from(key.parentNode.children).forEach(k=>k.classList.remove("is-depressed"));
    if(!action){
      if(displayedNum=="0"||previousKeyType=="operator"||previousKeyType=="calculate"){
        display.textContent=keyContent}
        else{display.textContent=displayedNum+keyContent;}
        
      calculator.dataset.previousKeyType="number";
    //按下数字键，为父元素增加属性data-previous-key="number"
  }
    if(action=="decimal"){
      //如果显示屏里没有小数点，则加上小数点，如有，则不加
      if(!displayedNum.includes(".")){ display.textContent=displayedNum+".";}else if(previousKeyType=="operator"||previousKeyType=="calculate"){
        display.textContent="0.";
      }//如果上一个按下的是操作符，直接按小数点，屏幕会显示‘0.’
     calculator.dataset.previousKeyType="decimal";
     //按下小数点，为父元素增加属性data-previous-key="decimal"
    }
    if(action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'){
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum
          if ( firstValue &&
            operator &&
            previousKeyType !== 'operator' &&
            previousKeyType!=="calculate"
          //防止出现点击数1-操作符-数2-操作符（得出前面结果）-操作符（再次计算）的情况
          ){
            const calcValue = calculate(firstValue, operator, secondValue)
            display.textContent = calcValue;
            calculator.dataset.firstValue = calcValue;
            }else{ calculator.dataset.firstValue = displayedNum}
            key.classList.add("is-depressed");
            calculator.dataset.previousKeyType="operator";
            //删除calculator.dataset.firstValue=displayedNum;让firstValue等于结算结果。这样按下多个操作符最后按等于符时，可以得出正确结果。其目的是进入第二轮计算时，不让第二轮的firstvalue等于第一轮的secondvalue。
            calculator.dataset.operator=action;
      
    }
    if(action=="calculate"){
      let firstValue=calculator.dataset.firstValue;
      const operator=calculator.dataset.operator;
      let secondValue=displayedNum;//注意let和const对结果的影响！
      //按下第一次等于符，得出结果。但上面这一行代码会让第二次按等于符时，secondvalue等于计算结果。
      if(firstValue){
        if(previousKeyType=="calculate"){firstValue=displayedNum;
          secondValue = calculator.dataset.modValue;
        }
        display.textContent=calculate(firstValue,operator,secondValue);
        }
        calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType="calculate";
      
    }
    if(action=="reset"){
      calculator.dataset.firstValue="";
      calculator.dataset.modValue="";
      calculator.dataset.operator="";
      calculator.dataset.previousKeyType="";
      display.textContent=0;
      calculator.dataset.previousKeyType = 'reset';
    }
    if(action=="for-delete"){
     display.textContent="0";
    }
  }})