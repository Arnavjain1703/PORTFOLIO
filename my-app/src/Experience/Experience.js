import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import './Experience.css'
import { connectAdvanced } from "react-redux";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Item from './Exp/items'
export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 1,
    showNavigation: true,
    config: config.gentle,
    loop:"",
    items:[]
  };
  x=null
  y=null;
 componentDidMount()
 {
   this.loop();
   Aos.init({

    offset: 40,
    duration: 500,
    easing: 'ease-in-sine',
  });
 }

 MouseOver=()=>
 {
    this.unloop();
    // console.log("hovered")
 }
 loop=()=>
 {

    var self = this;
  this.x=setInterval(function() {
    self.setState({goToSlide:self.state.goToSlide+1})
    // console.log(self.state.goToSlide%5)
  }, 2100);
  this.setState({loop:this.x});
 }
 unloop=()=>
 {
    console.log("kjdfv");
    clearInterval(this.x);
 }
  slides = [
    {
      key: uuidv4(),
      content: <Item unloop={this.unloop} loop={this.loop} desc={
             <ul type="disk">
               <li>Worked as Lead Angular Developer</li>
               <li>Developed a Web Portal for Amulet Entertainment on which users can register for Auditions and pay using the Payment Gateway integrated in it</li>
               <li>Used Rxjs For State Management</li>
               <li>Integrate with Django</li>
             </ul>
      }   className={(this.state.goToSlide%5)==0?"up":"low" } link="https://amuletentertainment.in" image="/assets/P1.png"></Item>
    },
   {
      key: uuidv4(),
      content: <Item desc={
         <ul type="disk">
           <li>
            Worked as React.Js Developer
           </li>
           <li>
            Developed a Static Webpage on React
           </li>
           <li>
             Hosted on Githun Pages
           </li>
         </ul>
      } unloop={this.unloop}loop={this.loop} className={(this.state.goToSlide%5==2)?"up":"low"} link="https://tradebag.in"  image="/assets/P3.png"> </Item>
    },
    {
      key: uuidv4(),
      content: <Item desc={
        <ul>
          <li>
            Worked as Lead Node.Js Developer
          </li>
          <li>
            Designed Database
          </li>
          <li>
          Created Rest AIPs for Car Parking Vendor App
          </li>
          <li>
          Integrated third party SMS API fast2sms for OTP service
          </li>
        </ul>
      } unloop={this.unloop}loop={this.loop} className={(this.state.goToSlide%5)==3?"up":"low"} link="https://drive.google.com/file/d/1xqGjF0tYQk1E6p0IQc96-1DnxQzwnp8u/view" image="/assets/E1.png"> </Item>
    },
    {
      key: uuidv4(),
      content: <Item 
       desc={<ul type="disk">
          <li>
           Full Stack Developer
          </li>
          <li>
          Working with a team of 10 designers and 32 developers for cultivating technical activities
          </li>
       </ul>}
      unloop={this.unloop}loop={this.loop} className={(this.state.goToSlide%5)==3?"up":"low"} link="https://silive.in" image="/assets/E2.png"> </Item>
    },

  ].map((slide, index) => {
    return { ...slide};
  });
  
  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };
  Right=()=>
  { 
    this.setState((prevState) => ({
      goToSlide: prevState.goToSlide-1
  }))
  this.unloop();
  for(let i=0;i<20;i++)
  {
     if(i==9)
     {
        this.loop();
     }
  }
  }
  Left=()=>
  {
    this.setState((prevState) => ({
      goToSlide: prevState.goToSlide +1
  }))
  this.unloop();
  for(let i=0;i<20;i++)
  {
     if(i==9)
     {
        this.loop();
     }
  }
  
  }
  render() {
    return (
      
     <div className="Exp">
       <div className="row position">
         <div  className="col-sm-6 col-xs-12 bg"></div>
         <div  className="col-sm-6 bg2"></div>
       </div>
       <div data-aos="fade-up" className="heading"><div className="content">MY EXPERIENCE</div></div>
        <div data-aos="fade-up" className="arrows d-flex justify-content-between">
          <div  type="button" onClick={this.Right}  className="rButton"><img src="/assets/rightA.svg"></img></div>
          <div type="button" onClick={this.Left} className="lButton"><img src="/assets/leftA.svg"></img></div>
        </div>   
      <div data-aos="fade-up" className="setting">
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
      
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          
      </div>
      </div>
      </div>
    );
  }
}
