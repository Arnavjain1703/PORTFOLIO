import React from 'react';
import './contact.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
class About extends React.Component {
    render(){
        return (
            <div className="contact">
             <div className="cover row"><div className="col-sm-6 cover2"></div><div className="col-sm-6 cover2"></div></div> 
               <div data-aos="fade-up" className="heading"><div className="content">Contact 📬</div></div> 
               
               <div className="details d-flex justify-content-center flex-wrap">
                   <a data-aos="fade-up" classname="a" target="_blank" href="https://www.facebook.com/arnav.jain.31337"><img src="/assets/facebook.svg"></img></a>
                 
                   <a data-aos="fade-up" classname="b" target="_blank" href="https://twitter.com/ArnavJa40384920"><img src="/assets/twitter.svg"></img></a>
                 
                   <a data-aos="fade-up" classname="c" target="_blank" href="https://www.instagram.com/arnav_17_03/"><img src="/assets/insta.svg"></img></a>
               
                   <a  data-aos="fade-up" classname="d" target="_blank" href="https://github.com/Arnavjain1703"><img src="/assets/git2.svg"></img></a>
                  
                   <a data-aos="fade-up" classname="e" target="_blank" href="https://www.linkedin.com/in/arnav-jain-555891194/"><img src="/assets/linkedin.svg"></img></a>
                   
                  
              </div>
              <div  data-aos="fade-up" className="center d-flex justify-content-center flex-wrap">
                  Designed and Developed With ❤️ By Arnav Jain
              </div> 
              
            </div>
        )
    }
}
export default About