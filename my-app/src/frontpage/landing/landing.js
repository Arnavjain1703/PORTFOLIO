import React,{Component} from 'react';
import './landing.css'
class Frontpage extends Component{
   render()
   {
       return (
        <div className="landing " >
            <div className="row display">
              <div className="col-sm-6 iconBg">
                <div className="iconlayer1 row display3">
                <div className="col-sm-3"><img src="/assets/icon.svg"></img></div>
                <div className="col-sm-3"><img src="/assets/icon4.svg"></img></div>
                <div className="col-sm-3"><img src="/assets/icon2.svg"></img></div>
                <div className="col-sm-3"><img src="/assets/icon3.svg"></img></div>
                </div>
              
                <div className="row iconlayer1 ">
                  <div className="col-sm-3 display3">
                  <div className="special"><img src="/assets/icon3.svg"></img></div>
                  <div className="special"><img src="/assets/icon3.svg"></img></div>
                  </div>
                  <div className="col-sm-12 col-md-6" style={{textAlign:"center"}}>
                  <div className="name">
                    Arnav
                  </div>
                  <div className="name" style={{marginTop:"0px"}}>
                    Jain
                  </div>
                  
                  <div className="line"></div>
                  <div  className="skills">
                    Full Stack Developer <span className="dash" >/</span> Competitive Programmer 
                  </div>
                  </div>
                  <div className="col-sm-3 display3">
                  <div className="special"><img src="/assets/icon3.svg"></img></div>
                  <div className="special"><img src="/assets/icon3.svg"></img></div>
                  </div>
                </div>
               
                <div className="iconlayer1 row display3">
                <div className="col-sm-3"><img src="/assets/icon.svg"></img></div>
                <div className="col-sm-3"><img src="/assets/icon4.svg"></img></div>
                <div className="col-sm-3"><img src="/assets/icon2.svg"></img></div>
                <div className="col-sm-3"><img src="/assets/icon3.svg"></img></div>
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
                    Full Stack Developer <span className="dash">/</span> Competitive Programmer 
                  </div>
              </div>
            </div>
         </div>

       )
   }
}
export default Frontpage