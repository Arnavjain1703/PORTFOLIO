import React,{Component} from 'react';
import './landing.css'
import { Link } from 'react-scroll';
class Frontpage extends Component{
   render()
   {
   
       return (
        <div className="landing " >
            <div  className="row display">
              <div  className="col-sm-6 iconBg">
                <div  className=" iconlayer1 ">
                  
                  <div className="hi">
                    HI <img src="/assets/hi.gif"></img>, My Name Is
           

                  </div>
                  <div className="name">
                    Arnav
                  </div>
                  <div className="name" >
                    Jain
                  </div>
                  {/* <div className="line"></div> */}
                  <div  className="skills">
                    Full Stack Developer <span className="dash" >/</span> Competitive Programmer 
                  </div>
              </div>
          </div>

              <div className="col-sm-6 margin center bg">
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
                <div className="hi">
                    HI 👋, My Name Is

                  </div>
                <div className="name">
                    Arnav Jain
                  </div>
                  
                  <div className="line"></div>
                  <div  className="skills">
                    Full Stack Developer <span className="dash">/</span> Competitive Programmer 
                  </div>
              </div>
            </div>
            <Link  to="projects" smooth={true} duration={1000}>

            <div><button type="button" style={{display:"block"}} class="scroll_down" id="scroll_down"></button></div>
            </Link>
         </div>

       )
   }
}
export default Frontpage