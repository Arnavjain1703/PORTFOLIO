import React,{Component} from 'react';
import './landing.css'
class Frontpage extends Component{
   render()
   {
       return (
        <div className="landing " >
            <div className="row display">
              <div className="col-sm-6">
                  <div className="name">
                    Arnav
                  </div>
                  <div className="name" style={{marginTop:"0px"}}>
                    Jain
                  </div>
                  
                  <div className="line"></div>
                  <div  className="skills">
                    Full Stack Developer <span style={{color:"#E784A7",fontWeight:"500",fontSize:"30px"}}>/</span> Competitive Programmer 
                  </div>
              </div>
              <div className="col-sm-6 center bg">
                <div className="bg2 "></div>
                <div className="bg3 "></div>
                <div className="bg4 "></div>
              </div>
            </div>
            <div className="display2">
              <div className="center bg">
                <div className="img">
                <div className="bg2 "></div>
                <div className="bg3 "></div>
                <div className="bg4 "></div>
                </div>
                <div className="name">
                    Arnav Jain
                  </div>
                  
                  <div className="line"></div>
                  <div  className="skills">
                    Full Stack Developer <span style={{color:"#E784A7",fontWeight:"500",fontSize:"30px"}}>/</span> Competitive Programmer 
                  </div>
              </div>
            </div>
         </div>

       )
   }
}
export default Frontpage