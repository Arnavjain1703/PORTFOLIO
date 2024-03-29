import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import './project.css'
import { connectAdvanced } from "react-redux";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Item from './items/items'
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
      content: <Item 
      
      desc={
        <ul>
          <li>
          Built a cross-platform Video Conferencing App focusing on
minimum server dependency</li>

  <li>Worked on connecting 50+ users with clear audio/video</li>
  <li>quality, security, screen sharing, and chat features</li>
  <li>Tech Used:Angular 8, Node.JS</li>
        </ul>
      } unloop={this.unloop} loop={this.loop} className={(this.state.goToSlide%5)==1?"up":"low"} link="https://github.com/Arnavjain1703/JoinChat-1/blob/master/README.md" image="/assets/P2.png"></Item>
    },
    {
      key: uuidv4(),
      content: <Item   desc={
        <ul>
          <li>
          An E-commerce website in which user can purschase products category-wise and seller can add products to sell
          </li>
          <li>Tech Used :Angular 8, Bootstrap, ASP.NET (MVC) version - 4.5, Microsoft SQL Server Management Studio for managing databases.
          </li>
        </ul>
      }unloop={this.unloop}loop={this.loop} className={(this.state.goToSlide%5)==3?"up":"low"} link="https://github.com/Arnavjain1703/ShoppingElf/blob/master/README.md" image="/assets/P4.png"> </Item>
    },
    {
      key: uuidv4(),
      content: <Item desc={
        <ul>
          <li>
            Bytepad is Used By College Students and Teachers
          </li>
          <li>
            Worked as Lead React Developer
          </li>
          <li>
          Bytepad has been a prominent source to provide college students with previous year questions papers and solutions, thus helping them in preparing for their upcoming examinations
          </li>
        </ul>
      } unloop={this.unloop}loop={this.loop} className={(this.state.goToSlide%5)==3?"up":"low"} link="https://Bytepad.silive.in" image="/assets/P6.png"> </Item>
    }
  
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
      
     <div className="projects">
       <div className="row position">
         <div  className="col-sm-6 col-xs-12 bg"></div>
         <div  className="col-sm-6 bg2"></div>
       </div>
       <div data-aos="fade-up" className="heading"><div className="content">My Projects 📚</div></div>
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
