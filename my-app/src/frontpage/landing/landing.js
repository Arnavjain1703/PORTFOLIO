import React,{Component} from 'react';
import './landing.css'
import '../../cursor/cursor.css'
import { Link } from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css'
class Frontpage extends Component{
  componentDidMount()
  {
    Aos.init({

      offset: 40,
      duration: 300,
      easing: 'ease-in-sine',
    });
  }
   render()
   {
   
       return (
        <div className="landing " >
            <div class="landing2">
            <div  className="row display">
              <div  className="col-sm-6 iconBg">
                <div  className=" iconlayer1 ">
                  
                  <div className="hi" data-aos="fade-up">
                    HI 👋, My Name Is
           

                  </div>
                  <div className="name" data-aos="fade-up">
                    Arnav
                  </div>
                  <div className="name" data-aos="fade-up" >
                    Jain
                  </div>
                  {/* <div className="line"></div> */}
                  <div  className="skills" data-aos="fade-up">
                    Full Stack Developer <span className="dash" >/</span> Competitive Programmer 
                  </div>
              </div>
          </div>

              <div className="col-sm-6 margin center bg"  data-aos="fade-up">
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
                <div className="hi" data-aos="fade-up">
                    HI 👋, My Name Is

                  </div>
                <div className="name" data-aos="fade-up">
                    Arnav Jain
                  </div>
                  
                  <div className="line"></div>
                  <div  className="skills" data-aos="fade-up">
                    Full Stack Developer <span className="dash">/</span> Competitive Programmer 
                  </div>
              </div>
            </div>
            <Link  to="Exp" smooth={true} duration={1000} data-aos="fade-up">

            <div><button type="button" style={{display:"block"}} class="scroll_down" id="scroll_down"></button></div>
            </Link>
         </div>
         </div>

       )
   }
}
export default Frontpage