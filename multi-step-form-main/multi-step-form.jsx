
class Content extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  step:1,
  inputValue:"",
  isToggleed:true,
  num1:9,
  num2:12,
  num3:15,
  num4:1,
  num5:2,
  num6:2,
  isChecked1:false,
  isChecked2:false,
  isChecked3:false,
  isFilled1:false,
  isFilled2:false,
  isFilled3:false,
  
  };
  }
  //没有handleInputChange你将无法输入内容给表单,
  //handleInputChange是为了告诉react你将要在哪里输入内容
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    }
    //for-change-the-content
    handleNextStep1 = () => {
      const { step } = this.state;
      const {isFilled1,isFilled2,isFilled3}=this.state;
      if(isFilled1==false||isFilled2==false||isFilled3==false){
       this.setState({step:step});
      }else{
        this.setState({ step: step + 1 });
      }
    }
    handleNextStep2 = () => {
      const { step } = this.state;
     
      
      
    }
    handleNextStep = () => {
      const { step } = this.state;
      this.setState({step:step+1});
    }


    handleGoBack=()=>{
      const{step}=this.state;
      this.setState({step:step-1});
    }
    goBackToStep2=()=>{
      this.setState({step:2});
    }
    //6.30
    handleToggle = () => {
      this.setState(prevState => ({
        isToggled: !prevState.isToggled
      }));
    };
    //7.4
    handleButtonClick = (title,price) => {
     this.setState({
      buttonValue:title,
      mainPrice:price
     })
    };
    //7.5
    handleCheck1=(event,title,price)=>{
      const { checked} = event.target;

      this.setState({
        isChecked1:checked?true:false,
        subTitle1:checked?title:"",
        subPrice1:checked?price:""
      });
    }
    handleCheck2=(event,title,price)=>{
      const { checked} = event.target;

      this.setState({
        isChecked2:checked?true:false,
        subTitle2:checked?title:"",
        subPrice2:checked?price:""
      });
    }
    handleCheck3=(event,title,price)=>{
      const { checked} = event.target;

      this.setState({
        isChecked3:checked?true:false,
        subTitle3:checked?title:"",
        subPrice3:checked?price:""
      });
    }
    handleInputChange1=(event)=>{
        const {input}=event.target.value;
        if(input==""){
          this.setState({isFilled1:false})
        }else{ 
          this.setState({isFilled1:true})}
    }
    handleInputChange2=(event)=>{
      const {input}=event.target.value;
      if(input==""){
        this.setState({isFilled2:false})
      }else{ 
        this.setState({isFilled2:true})}
  }
  handleInputChange3=(event)=>{
    const {input}=event.target.value;
    if(input==""){
      this.setState({isFilled3:false})
    }else{ 
      this.setState({isFilled3:true})}
}

  render() {
    //当使用对象解构赋值时，您需要指定要从哪个对象中提取属性。在这种情况下，您只需使用 const { step } = this.state;，它将从 this.state 对象中提取 step 属性的值并将其赋给 step 变量。
    const{step}=this.state;
    //6.30
    const { isToggled } = this.state;
    //7.4
    const { buttonValue} = this.state;
    const{mainPrice}=this.state;
    //7.5
    const {isChecked1,isChecked2,isChecked3}=this.state;
    const{subPrice1,subPrice2,subPrice3,subTitle1,subTitle2,subTitle3}=this.state;
    const mainnum=isToggled?mainPrice*10:mainPrice;
    const subnum1=isChecked1?(isToggled?subPrice1*10:subPrice1):0
    const subnum2=isChecked2?(isToggled?subPrice2*10:subPrice2):0
    const subnum3=isChecked3?(isToggled?subPrice3*10:subPrice3):0
    //7.8
    const {inputValue1}=this.state;
    const {inputValue2}=this.state;
    const {inputValue3}=this.state;
    const{isFilled1,isFilled2,isFilled3}=this.state;

    //css
    //public
      const publicstyle={
        display: 'flex' ,
        flexDirection: 'column',
        height:"100%",
        justifyContent:"space-around",
      }
      const subPulicStyle={
        width:"350px",
        height:"50%",
        display: 'flex' ,
        flexDirection: 'column',
        justifyContent:"space-around",
        
      }
      //page1
      const page1={
        lineHeight:"0.7",
        margin:"0.7em 0"
      }
      const page1T={
        marginBottom:"0.5em"
      }

      const inputStyleOfStep1={
       width:"100%",
        borderRadius:"7px",
        height:"35px",
        fontSize:"10px",
        border:"0.5px solid grey"
              }
     
      const styleForH1={
        fontSize:"20px",
        fontWeight:"700",  
      }
      const styleForH5={
        fontSize:"10px",
        color:"grey",
      }

      const theFiled={
        color:"red",
      }

      const lable={
        fontSize:"10px",
        width:"100%",
        display: 'flex' ,
        justifyContent:"space-between",
      }
//page2
      const btnstyleForChoice={
        display:"flex",
        flexDirection: 'row',
        justifyContent:"space-between",
        width:"100%",      
      }

      const page2btn={
        width:"30%",
        height:"130px",
        display: 'flex',
        flexDirection: 'column', 
        justifyContent:"space-between",
       borderRadius: "7px",
       border:"1.8px solid hsl(229, 24%, 87%)",
       backgroundColor:"white",       
      }
      const page2btnT={
        fontWeight:"700",
        fontSize:"15px",
        margin:"0",
        padding:"0",
        display:"inline-block",
      }
      const page2btnH={
       transform:"scale(90%)",
       textAlign:"left",
      }
      const imgstyle={
        transform: 'scale(70%)' 
      }
    
     //page3
     const page3input={
      height:"35%",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      padding:"0 1em",
      margin:"0.5em",
      borderRadius: "7px",
      fontSize:"15px",
      border:"1.8px solid hsl(229, 24%, 87%)",
     }
     const page3inputT={
      fontWeight:"700",
      marginTop:"1.5em"
     }
     const page3inputTs={
      fontSize:"10px",
      color:"grey"
     }
     const page3inputH={
      lineHeight:"0.1", 
      fontSize:"13px",
      marginLeft:"1em"
      
     }
     const page3inputP={
      textAlign:"center",
      color:"hsl(243, 100%, 62%)",
      fontSize:"10px",
      marginTop:"1.5em",
      fontWeight:"550",
     }
     //page4
     const page4part1={
      backgroundColor:" hsl(217, 100%, 97%)",
      borderRadius: "7px",
      fontSize:"15px",
      height:"fit-content",
      padding:"1em 1em",
      marginBottom:"1em"
     }
     const page4layout={
      display:"flex",
      justifyContent:"space-between",
      flexDirection: 'row', 
      borderBottom:"0.3px solid  hsl(229, 24%, 87%)",
     paddingBottom:"1em"
     }

     const details0={
      fontWeight:"700",
      fontSize:"10px",
      display:"inline"
     }
     const details1={
      alignSelf:"center",
      fontWeight:"700",
      fontSize:"10px",
      marginBottom:"1em"
     }
     const details2={
      alignSelf:"center",
      fontSize:"5px",
     color:"hsl(231, 11%, 63%)",
     borderBottom:"0.5px solid  hsl(231, 11%, 63%)",
     fontWeight:"400",
     }
     const detailsOthers={
      fontSize:"5px",
      color:"grey",
      fontWeight:"400",
      display:"flex",
      justifyContent:"space-between",
      flexDirection: 'row', 

     }
     const othersT={
      fontSize:"10px",
     }
     const othersP={
      color:"hsl(243, 100%, 62%)",
      fontWeight:"800",
      fontSize:"15px"
     }
     //page5
     const page5layout={
      width:"350px",
      height:"50%",
     textAlign:"center",
     marginTop:"25%"
     }
     const page5img={
      transform:"scale(60%)"
     }
     const page5T={
      fontSize:"20px",
      fontWeight:"800"
     }

     const page5P={
      fontSize:"10px",
      color:"hsl(231, 11%, 63%)"
     }
     const changestyle={
      backgroundColor:"hsl(206, 94%, 87%)",
      color:"black"
    }

    //html
     if(step==1){
      return (
        <div className="background_color">
  <div className="background_img">
 
 <main>
 
<section id="sider">
  <ul>
    <li>
    <div style={changestyle}className="leftone">1</div>
    <div className="rightone">
    <p className="greyone">STEP1</p>
    <p className="whiteone">YOUR INFO</p></div>
  </li>
  <li>
    <div className="leftone">2</div>
    <div className="rightone">
    <p className="greyone">STEP2</p>
    <p className="whiteone">SELECT PLAN</p></div>
  </li>
    <li>
      <div className="leftone">3</div>
      <div className="rightone">
     <p className="greyone"> STEP3</p>
      <p className="whiteone">ADD-ONS</p></div>
    </li>
   <li> 
    <div className="leftone">4</div>
    <div className="rightone">
    <p className="greyone">STEP4</p>
    <p className="whiteone">SUMMARY</p></div>
  </li>
   
  </ul>
</section>

<section id="main-part">

<section id="content">
  <div style={publicstyle}>
    <div style={page1T}>
  <h1 style={styleForH1} id="big-title">Personal info</h1>
  <h5 style={styleForH5} id="explanation">Please provide your name, email address, and phone number.</h5></div>
  <form  style={subPulicStyle}action="" method="post">
    <div style={page1}>
  <label style={lable} htmlFor="name"><span>Name</span><span style={theFiled}>{isFilled1?"":"This field is required"}</span></label><br></br>
  <input
  style={inputStyleOfStep1}
  type="text"
  id="name"
  name="name"
  required
  placeholder="e.g. Stephen King"
  value={inputValue1}
  onChange={this.handleInputChange1}
  /><br></br>
  </div>
  <div style={page1}>
  <label style={lable}htmlFor="email"><span>Email Address</span><span style={theFiled}>{isFilled2?"":"This field is required"}</span></label><br></br>
  <input
  style={inputStyleOfStep1}
  type="email"
  id="email"
  name="email"
  value={inputValue2}
  required
  placeholder="e.g. stephenking@lorem.com"
  onChange={this.handleInputChange2}
  /><br></br></div>
  <div style={page1}>
  <label style={lable} htmlFor="phone"><span>Phone Number</span><span style={theFiled}>{isFilled3?"":"This field is required"}</span></label><br></br>
  <input
  style={inputStyleOfStep1}
  type="tel"
  id="phone"
  name="phone"
  value={inputValue3}
  required
  placeholder="e.g. +1 234 567 890"
  onChange={this.handleInputChange3}
  /><br></br></div>
  </form>
  <section id="btns">
  <div></div>
  <div></div>
  <button className="nextstep"onClick={this.handleNextStep1}>Next step</button>
  </section>
  </div>

</section>



</section>
 </main>
</div>
</div>
        )
    } 
    if(step==2){
      return (
        <div className="background_color">
        <div className="background_img">
        
       <main>
       
      <section id="sider">
        <ul>
          <li>
          <div className="leftone">1</div>
          <div className="rightone">
          <p className="greyone">STEP1</p>
          <p className="whiteone">YOUR INFO</p></div>
        </li>
        <li>
          <div style={changestyle}className="leftone">2</div>
          <div className="rightone">
          <p className="greyone">STEP2</p>
          <p className="whiteone">SELECT PLAN</p></div>
        </li>
          <li>
            <div className="leftone">3</div>
            <div className="rightone">
           <p className="greyone"> STEP3</p>
            <p className="whiteone">ADD-ONS</p></div>
          </li>
         <li> 
          <div className="leftone">4</div>
          <div className="rightone">
          <p className="greyone">STEP4</p>
          <p className="whiteone">SUMMARY</p></div>
        </li>
         
        </ul>
      </section>
      
      <section id="main-part">
      
      <section id="content">
        <div style={publicstyle}>
          <div>
          <h1 style={styleForH1} >
            Select your plan
          </h1>
          <h5 style={styleForH5}>
            You have the option of monthly or yearly billing.
          </h5></div>
          <div  style={subPulicStyle}>
            <div  style={btnstyleForChoice}>
      
              <button style={page2btn} onClick={()=>this.handleButtonClick("arcade",this.state.num1)} >
                <img src="./assets/images/icon-arcade.svg" style={imgstyle} />
                <div style={page2btnH}>
                <p style={page2btnT}>Arcade </p>
                {isToggled ? <p className="price">$<span>{this.state.num1*10}</span>/yr</p>:<p className="price">$<span>{this.state.num1}</span>/mo</p> }
               
                
                <p  className="price">{isToggled ?<p>2 months free</p>:<p></p>}</p></div>
      
      
              </button>
      
              <button style={page2btn}onClick={()=>this.handleButtonClick("advanced",this.state.num2)} >
                <img src="./assets/images/icon-advanced.svg" style={imgstyle} />
                <div style={page2btnH}>
                <p style={page2btnT}>Advanced</p>
      
                {isToggled ?<p className="price">$<span>{this.state.num2*10}</span>/yr</p>:<p className="price">$<span>{this.state.num2}</span>/mo</p>}
      
                <p  className="price">{isToggled ?<p>2 months free</p>:<p></p>}</p></div>
              </button>
      
              <button style={page2btn}onClick={()=>this.handleButtonClick("pro",this.state.num3)}>
                <img src="./assets/images/icon-pro.svg" style={imgstyle} />
                <div style={page2btnH}>
                <p style={page2btnT}>Pro</p>
      
                {isToggled ?<p className="price">$<span>{this.state.num3*10}</span>/yr</p>:<p className="price">$<span>{this.state.num3}</span>/mo</p>}
      
                <p  className="price">{isToggled ?<p>2 months free</p>:<p></p>}</p></div>
              </button>
            </div>
            <div className="choose-one" >
              <span >Monthly</span>
              <button className={`toggle-button ${isToggled? 'on' : 'off'}`}onClick={this.handleToggle} title="btn"/>
              <span >Yearly</span>
            </div>
          </div>
          <section id="btns">
            <button className="goback"onClick={this.handleGoBack}>Go back</button>
            <div></div>
            <button className="nextstep" onClick={this.handleNextStep}>Next step</button>
          </section>
        </div>
      
      </section>
      
      
      
      </section>
       </main>
      </div>
      </div>
      );
      
    }
    if(step==3){
      return (
        <div className="background_color">
        <div className="background_img">
        
       <main>
       
      <section id="sider">
        <ul>
          <li>
          <div className="leftone">1</div>
          <div className="rightone">
          <p className="greyone">STEP1</p>
          <p className="whiteone">YOUR INFO</p></div>
        </li>
        <li>
          <div className="leftone">2</div>
          <div className="rightone">
          <p className="greyone">STEP2</p>
          <p className="whiteone">SELECT PLAN</p></div>
        </li>
          <li>
            <div style={changestyle}className="leftone">3</div>
            <div className="rightone">
           <p className="greyone"> STEP3</p>
            <p className="whiteone">ADD-ONS</p></div>
          </li>
         <li> 
          <div className="leftone">4</div>
          <div className="rightone">
          <p className="greyone">STEP4</p>
          <p className="whiteone">SUMMARY</p></div>
        </li>
         
        </ul>
      </section>
      
      <section id="main-part">
      
      <section id="content">
        <div style={publicstyle}>
          <div>
          <h1 style={styleForH1}>
            Pick add-ons
          </h1>
          <h5 style={styleForH5}>
            Add-ons help enhance your gaming experience.
          </h5></div>
          <div style={subPulicStyle}>
      
            <div  style={page3input}>
              <div >
              <input checked={isChecked1}onChange={(event)=>this.handleCheck1(event,"Online service",this.state.num4)} type="checkbox" name="online" />
              <label  style={page3inputH}htmlFor="online">
                <p style={page3inputT}>Online service</p>
                <p style={page3inputTs}>Access to multiplayer games</p>
                </label></div>
            <div  style={page3inputP}>{isToggled ?<p>$<span>{this.state.num4*10}</span>/yr</p>:<p>$<span>{this.state.num4}</span>/mo</p>} </div>
            </div>
         
      
            <div  style={page3input}>
            <div>
              <input checked={isChecked2} onChange={(event)=>this.handleCheck2(event,"Larger storage",this.state.num5)} type="checkbox" name="storage" />
              <label style={page3inputH}htmlFor="storage">
                <p style={page3inputT}>Larger storage</p>
                <p style={page3inputTs}>Extra 1TB of cloud save</p>
                </label></div>
             <div style={page3inputP}> {isToggled ?<p>+$<span>{this.state.num5*10}</span>/yr</p>:<p>$<span id="price">{this.state.num5}</span>/mo</p>}</div>
            </div>
      
            <div  style={page3input}>
              <div>
              <input checked={isChecked3}onChange={(event)=>this.handleCheck3(event,"Customizable Profile",this.state.num6)} type="checkbox" name="profile" />
              <label style={page3inputH}htmlFor="profile">
                <p style={page3inputT}>Customizable Profile</p>
                <p style={page3inputTs}>Custom theme on your profile</p>
                </label></div>
             <div style={page3inputP}> {isToggled ?<p>+$<span>{this.state.num6*10}</span>/yr</p>:<p>$<span id="price">{this.state.num6}</span>/mo</p>}</div>
            </div>
          </div>
          <section id="btns">
            <button className="goback" onClick={this.handleGoBack}>Go back</button>
            <div></div>
            <button className="nextstep" onClick={this.handleNextStep}>Next step</button>
          </section>
        </div>
      
      </section>
      
      
      
      </section>
       </main>
      </div>
      </div>
      );
      
    }
    if(step==4){
      return (
        <div class="background_color">
        <div class="background_img">
        
       <main>
       
      <section id="sider">
        <ul>
          <li>
          <div className="leftone">1</div>
          <div className="rightone">
          <p className="greyone">STEP1</p>
          <p className="whiteone">YOUR INFO</p></div>
        </li>
        <li>
          <div className="leftone">2</div>
          <div className="rightone">
          <p className="greyone">STEP2</p>
          <p className="whiteone">SELECT PLAN</p></div>
        </li>
          <li>
            <div className="leftone">3</div>
            <div className="rightone">
           <p className="greyone"> STEP3</p>
            <p className="whiteone">ADD-ONS</p></div>
          </li>
         <li> 
          <div style={changestyle}className="leftone">4</div>
          <div className="rightone">
          <p className="greyone">STEP4</p>
          <p className="whiteone">SUMMARY</p></div>
        </li>
         
        </ul>
      </section>
      
      <section id="main-part">
      
      <section id="content">
        <div style={publicstyle}>
          <div>
          <h1 style={styleForH1}>
            Finishing up
          </h1>
          <h5 style={styleForH5}>
            Double-check everything looks OK before confirming.
          </h5></div>
          <div  style={subPulicStyle}>
      
            <div>
              <div  style={page4part1}>
              <div  style={page4layout}>
                <div style={details0}>
                  <p style={details0}>{buttonValue}<p style={details0}>{isToggled?"(Yearly)":"(Monthly)"}</p></p><br></br>
                  <a style={details2}onClick={this.goBackToStep2}>Change</a> </div>
                  <p style={details1}>${isToggled?mainPrice*10:mainPrice}/{isToggled?"yr":"mo"}</p>
                 
                
              </div>
              
              <div >
                
              <div style={detailsOthers}>
                  <p style={othersT}>{isChecked1?subTitle1:""}</p>
                 
                  <p style={details1}>{isChecked1?(isToggled?"+$"+subPrice1*10+"/yr":"+$"+subPrice1+"/mo"):""}</p>
                  </div>
      
                  <div style={detailsOthers}>
                  <p style={othersT}>{isChecked2?subTitle2:""}</p>
                 
                  <p style={details1}>{isChecked2?(isToggled?"+$"+subPrice2*10+"/yr":"+$"+subPrice2+"/mo"):""}</p>
                  </div>
      
                  <div style={detailsOthers}>
                  <p style={othersT}>{isChecked3?subTitle3:""}</p>
                  
                  <p style={details1}>{isChecked3?(isToggled?"+$"+subPrice3*10+"/yr":"+$"+subPrice3+"/mo"):""}</p>
                  </div>
                  </div>
              </div>
              <div style={detailsOthers}>
                <p>Total(per{isToggled?" year":" month"})</p>
                <p style={othersP}>${mainnum+subnum1+subnum2+subnum3}/{isToggled?"yr":"mo"}</p>
              </div>
      
            </div>
          </div>
          <section id="btns">
            <button className="goback"onClick={this.handleGoBack}>Go back</button>
            <div></div>
            <button className="confirm"onClick={this.handleNextStep}>Confirm</button>
          </section>
        </div>
      
      </section>
      
      
      
      </section>
       </main>
      </div>
      </div>
      );
      
    }
    if(step==5){
      return(
        
        <div class="background_color">
        <div class="background_img">
        
       <main>
       
      <section id="sider">
        <ul>
          <li>
          <div className="leftone">1</div>
          <div className="rightone">
          <p className="greyone">STEP1</p>
          <p className="whiteone">YOUR INFO</p></div>
        </li>
        <li>
          <div className="leftone">2</div>
          <div className="rightone">
          <p className="greyone">STEP2</p>
          <p className="whiteone">SELECT PLAN</p></div>
        </li>
          <li>
            <div className="leftone">3</div>
            <div className="rightone">
           <p className="greyone"> STEP3</p>
            <p className="whiteone">ADD-ONS</p></div>
          </li>
         <li> 
          <div style={changestyle}className="leftone">4</div>
          <div className="rightone">
          <p className="greyone">STEP4</p>
          <p className="whiteone">SUMMARY</p></div>
        </li>
         
        </ul>
      </section>
      
      <section id="main-part">
      
      <section id="content">
        <div style={page5layout}>
          <img  style={page5img}src=".\assets\images\icon-thank-you.svg" />
          <p style={page5T}>Thank you!</p>
      
      <p style={page5P}>Thanks for confirming your subscription! We hope you have fun 
      using our platform. If you ever need support, please feel free 
      to email us at support@loremgaming.com.</p>
      
        </div>
      </section>
      
      
      
      </section>
       </main>
      </div>
      </div>
      )
    }
  }

}
  ReactDOM.render(<Content />, document.getElementById("allin"));
