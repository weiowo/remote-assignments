
const Header = ()=>{
    return(
        <header className = "header">

          <div className="logo">
          <a href="#"><img src="images/logo.png" alt="logo" ></img></a>
          </div>

          <nav className = "navigation">  
            <MenuBtn />
            <ul class="nav-links">
              <li><a href="">Home</a></li>
              <li><a href="">Products</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Account</a></li>
            </ul>
          </nav>
        </header>
    );
}


class MenuBtn extends React.Component
{
  state={
    Showbutton:false,
  }
  render()
  {
    var MenuChange = () =>
    {
      this.setState({Showbutton:!this.state.Showbutton});
      console.log("test");
    }
    const x = this.state.Showbutton;
    return(
      
      <div className={x ? "menu-btn open" : "menu-btn"} onClick={MenuChange}>
        <div className="menu-btn_hamburger"></div>
        <ul className={x? "nav-links active": "nav-links "} >
              <li><a href="">Home</a></li>
              <li><a href="">Products</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Account</a></li>
       </ul>

      </div>

    )
  }
}


//原javascript功能參考

// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click',()=>{
//   if (!menuOpen){
//     menuBtn.classList.add('open');
//     menuOpen=true;
//   }else{
//     menuBtn.classList.remove('open');
//     menuOpen = false;
//   }

// });


// const menuClick = document.querySelector('.menu-btn');
// const menuOut = document.querySelector('.nav-links');

// menuClick.addEventListener("click",()=>{
//   menuClick.classList.toggle("active");
//   menuOut.classList.toggle("active");
// })


class Banner extends React.Component
{
  state ={
    TextClicker:false,
  }
  render()
  {
    var TextChange = e =>
    {
      this.setState({TextClicker:!this.state.TextClicker});
    }
     const x = this.state.TextClicker;
    return(
      <div className="banner">
       <img src="images/image1.png" alt="banner" ></img>
        <h2 className="heading" id="heading" onClick={TextChange}>
        {x? "Have a good time":"Welcome to Our Shop!"}</h2>
      </div>
    )
  }
}

const TopContainer =()=>{
  return(
    <div className="top-container">
      <div className="container">
        <div className="box">
        <h2>Content box1</h2>
        <p>Hello welcome to our shop, we have so many products here!</p>
        </div>
        <div className="box">
        <h2>Content box2</h2>
        <p>Hello welcome to our shop, we have so many products here!</p>
        </div>
        <div className="box">
        <h2>Content box3</h2>
        <p>Hello welcome to our shop, we have so many products here!</p>
        </div>
        <div className="box">
          <h2>Content box4</h2>
          <p>Hello welcome to our shop, we have so many products here!</p>
        </div>
      </div>
    </div> 
  )
}

//用props的方式寫的做法
// const TopContainer =(props)=>{
//   return(
//     <div className="top-container">
//       <div className="container">
//         <div className="box">
//         <h2>{props.boxnum}</h2>
//         <p>{props.detail}</p>
//         </div>
//       </div>
//     </div>
//   )
// }



class ShowandHide extends React.Component
{
  state ={
    divcontainer:false,
  }
  render()
  {
    var Handlechange = e =>
    {
      this.setState({divcontainer:!this.state.divcontainer});
    }
     const x = this.state.divcontainer;
    return(
      <div>
       <center>
        <div className="top-container">
        <div className="btn-cta">
        <button className="btn-main" onClick={Handlechange}>
        {x?"Call to Action":"Call to Action"}</button>
        {
          x && 
          (<div>
            <div className="lower-container">
              <div class = "new-container">
                  <div className="box">
                  <h2>Content box5</h2>
                  <p>Shopping is such a happy thing in the world!</p>
                  </div>
                  <div className="box">
                  <h2>Content box6</h2>
                  <p>Shopping is such a happy thing in the world!</p>
                  </div>
                  <div className="box">
                  <h2>Content box7</h2>
                  <p>Shopping is such a happy thing in the world!</p>
                  </div>
                  <div className="box">
                    <h2>Content box8</h2>
                    <p>Shopping is such a happy thing in the world!</p>
                  </div>
              </div>
            </div>          
          </div>)
        }
        </div>
        </div>
        </center>
      </div>)
    }
  }


const LowerContainer=()=>{
  return(
    <div className="lower-container">
      <div class = "new-container">
          <div className="box">
          <h2>Content box5</h2>
          <p>Shopping is such a happy thing in the world!</p>
          </div>
          <div className="box">
          <h2>Content box6</h2>
          <p>Shopping is such a happy thing in the world!</p>
          </div>
          <div className="box">
          <h2>Content box7</h2>
          <p>Shopping is such a happy thing in the world!</p>
          </div>
          <div className="box">
            <h2>Content box8</h2>
            <p>Shopping is such a happy thing in the world!</p>
          </div>
      </div>
    </div>
  )
}


//用props的方式寫的做法
// const LowerContainer =(props)=>{
//   return(
//     <div className="lower-container">
//       <div className="new-container">
//         <div className="box">
//         <h2>{props.boxnum}</h2>
//         <p>{props.detail}</p>
//         </div>
//       </div>
//     </div>
//   )
// }



const Footer =()=>{
  return(
    
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="#">about us</a></li>
              <li><a href="#">our services</a></li>
              <li><a href="#">privacy policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">shipping</a></li>
              <li><a href="#">returns</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><a href="#">bedding</a></li>
              <li><a href="#">house decoration</a></li>
              <li><a href="#">carpet</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
            <a href="#"><img src="images/facebook.png" alt="facebook" width="20px"></img></a>
            <a href="#"><img src="images/instagram.png" alt="instagram" width="20px"></img></a>
            <a href="#"><img src="images/line.png" alt="line" width="20px"></img></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}



class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Banner />
        <TopContainer />
        <ShowandHide />
        <Footer />
      </div>
    );
  }
}



const contain = document.getElementById('root');
const root = ReactDOM.createRoot(contain);
root.render(<App />)






/* 用props的方式寫TopContainer->在最下面render App中
{this.props.initialcontent.map(contents=>
  <TopContainer 
    boxnum={contents.boxnum}
    detail={contents.detail}
    key={contents.id.toString()}
  />
)} */


/* 用props的方式寫LowerContainer
{this.props.initiallowercontent.map(lowerContents=>
<LowerContainer 
  boxnum={lowerContents.boxnum}
  detail={lowerContents.detail}
  key={lowerContents.id.toString}
/>
)} */





/*原html

<header class="header">
    <div class="logo">
    <a href="#"><img src="images/logo.png" alt="logo" ></a>
  </div>

  <nav class = "navigation">
    
    <div class="menu-btn">
      <div class="menu-btn_hamburger"></div>
    </div>


    <ul class="nav-links">
      <li><a href="">Home</a></li>
      <li><a href="">Products</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Contact</a></li>
      <li><a href="">Account</a></li>
    </ul>
  </nav>

</header>


<div class="banner"
onclick='document.getElementById("heading").innerHTML = "Have a good time!"'>
  <img src="images/image1.png" alt="banner" >
  <h2 class="heading" id="heading">Welcome to our shop</h2>
</div>

<h2>Section title</h2>
<div class="top-container">
  <div class="container">
    <div class="box">
    <h2>Content box1</h2>
    <p>Hello welcome to our shop, we have so many products here!</p>
    </div>
    <div class="box">
    <h2>Content box2</h2>
    <p>Hello welcome to our shop, we have so many products here!</p>
    </div>
    <div class="box">
    <h2>Content box3</h2>
    <p>Hello welcome to our shop, we have so many products here!</p>
    </div>
    <div class="box">
      <h2>Content box4</h2>
      <p>Hello welcome to our shop, we have so many products here!</p>
    </div>
  </div>
</div>

<div class="top-container">
  <div class="btn-cta">
    <button class="btn-main">Call to action</button>
  </div>
</div>

<div class="lower-container">
  <div class = "new-container">
      <div class="box">
      <h2>Content box1</h2>
      <p>Hello welcome to our shop, we have so many products here!</p>
      </div>
      <div class="box">
      <h2>Content box2</h2>
      <p>Hello welcome to our shop, we have so many products here!</p>
      </div>
      <div class="box">
      <h2>Content box3</h2>
      <p>Hello welcome to our shop, we have so many products here!</p>
      </div>
      <div class="box">
        <h2>Content box4</h2>
        <p>Hello welcome to our shop, we have so many products here!</p>
      </div>
  </div>
</div>




<footer class="footer" id="footer">
<div class="footer-container">
 <div class="footer-row">
   <div class="footer-col">
     <h4>company</h4>
     <ul>
       <li><a href="#">about us</a></li>
       <li><a href="#">our services</a></li>
       <li><a href="#">privacy policy</a></li>
     </ul>
   </div>
   <div class="footer-col">
    <h4>get help</h4>
    <ul>
      <li><a href="#">FAQ</a></li>
      <li><a href="#">shipping</a></li>
      <li><a href="#">returns</a></li>
    </ul>
  </div>
  <div class="footer-col">
    <h4>online shop</h4>
    <ul>
      <li><a href="#">bedding</a></li>
      <li><a href="#">house decoration</a></li>
      <li><a href="#">carpet</a></li>
    </ul>
  </div>
  <div class="footer-col">
    <h4>follow us</h4>
    <div class="social-links">
     <a href="#"><img src="images/facebook.png" alt="facebook" width="20px"></a>
     <a href="#"><img src="images/instagram.png" alt="instagram" width="20px"></a>
     <a href="#"><img src="images/line.png" alt="line" width="20px"></a>
    </div>
  </div>
</div>
</div>*/




// 用props的方式寫TopContainer與LowerContainer會用到的資料
// const contents=[
//   {
//     boxnum:"contentbox1",
//     detail:"welcome",
//     id:1
//   },
//   {
//     boxnum:"contentbox2",
//     detail:"to",
//     id:2
//   },
//   {
//     boxnum:"contentbox3",
//     detail:"our",
//     id:3
//   },
//   {
//     boxnum:"contentbox4",
//     detail:"shop",
//     id:4
//   },
// ];

// const lowerContents=[
//   {
//     boxnum:"contentbox5",
//     detail:"Shopping",
//     id:5
//   },
//   {
//     boxnum:"contentbox6",
//     detail:"is",
//     id:6
//   },
//   {
//     boxnum:"contentbox7",
//     detail:"so",
//     id:7
//   },
//   {
//     boxnum:"contentbox8",
//     detail:"happy",
//     id:8
//   },
// ];
