import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import './project.css'
import { connectAdvanced } from "react-redux";
import Aos from 'aos';
import 'aos/dist/aos.css'
export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 1,
    showNavigation: true,
    config: config.gentle,
    loop:"",
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

 loop()
 {

    var self = this;
  this.x=setInterval(function() {
    self.setState({goToSlide:self.state.goToSlide+1})
    console.log(self.state.goToSlide%5)
  }, 2100);
  this.setState({loop:this.x});
 }
 unloop()
 {
    clearInterval(this.x);
    // console.log("skjdf")
 }
  slides = [
    {
      key: uuidv4(),
      content: <a className={(this.state.goToSlide%5)==0?"up":"low" } href="https://amuletentertainment.in"><img src="/assets/P1.png"></img></a>
    },
    {
      key: uuidv4(),
      content: <a className={(this.state.goToSlide%5)==1?"up":"low"} href="https://joinchat-3c9d4.web.app/"><img src="/assets/P2.png"></img></a>
    },
   {
      key: uuidv4(),
      content: <a className={(this.state.goToSlide%5==2)?"up":"low"} href="https://tradebag.in"><img src="/assets/P3.png"></img></a>
    },{
      key: uuidv4(),
      content: <a className={(this.state.goToSlide%5)==3?"up":"low"} href="https://shoppingelf-91afd.web.app/frontpage"><img src="/assets/P4.png"></img></a>
    },{
      key: uuidv4(),
      content: <a className={(this.state.goToSlide%5)==4?"up":"low"} href="https://health-care-97af5.web.app/frontpage"><img src="/assets/P5.png"></img></a>
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
