import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import './project.css'
export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 1,
    showNavigation: true,
    config: config.gentle,
    loop:"",
  };
 componentDidMount()
 {
  var self = this;
  var x=setInterval(function() {
    self.setState({goToSlide:self.state.goToSlide+1})
  }, 2000);
  this.setState({loop:x});
 }
  slides = [
    {
      key: uuidv4(),
      content: <img  src="/assets/P1.png" alt="1" />
    },
    {
      key: uuidv4(),
      content: <img  src="/assets/P1.png" alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src="/assets/P1.png" alt="1" />
    },{
      key: uuidv4(),
      content: <img src="/assets/P1.png" alt="1" />
    },{
      key: uuidv4(),
      content: <img src="/assets/P1.png" alt="1" />
    },{
      key: uuidv4(),
      content: <img src="/assets/P1.png" alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src="/assets/P1.png" alt="1" />
    },{
      key: uuidv4(),
      content: <img src="/assets/P1.png" alt="1" />
    },{
      key: uuidv4(),
      content: <img src="/assets/P1.png" alt="1" />
    },{
      key: uuidv4(),
      content: <img src="/assets/P1.png" alt="1" />
    },{
      key: uuidv4(),
      content: <img src="/assets/P1.png" alt="1" />
    },{
      key: uuidv4(),
      content: <img src="/assets/P1.png" alt="1" />
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });
  
  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };
  checkClick() {
    while(1)
    {
      console.log("ijsjdfnv");
    }
  }
  render() {
    return (
     <div className="projects">
       
       <div className="row">
         <div  className="col-sm-6 bg"></div>
       </div>
       <div className="heading"><div className="content">My Project 📚</div></div>
       

      <div className="setting">
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          // offsetRadius={this.state.offsetRadius}
          // showNavigation={this.state.showNavigation}
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
