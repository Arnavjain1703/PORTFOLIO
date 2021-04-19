import React from 'react';
import './contact.css';

class About extends React.Component {
    render(){
        return (
            <div className="contact">
             <div className="cover row"><div className="col-sm-6 cover2"></div><div className="col-sm-6 cover2"></div></div> 
               <div className="heading"><div className="content">Contact 📬</div></div> 
               
               <div className="details d-flex justify-content-center flex-wrap">
                   <a classname="a" target="_blank" href="https://www.facebook.com/arnav.jain.31337"><img src="/assets/facebook.svg"></img></a>
                 
                   <a classname="b" target="_blank" href="https://twitter.com/ArnavJa40384920"><img src="/assets/twitter.svg"></img></a>
                 
                   <a classname="c" target="_blank" href="https://www.instagram.com/arnav_17_03/"><img src="/assets/insta.svg"></img></a>
               
                   <a classname="d" target="_blank" href="https://github.com/Arnavjain1703"><img src="/assets/git2.svg"></img></a>
                  
                   <a classname="e" target="_blank" href="https://www.linkedin.com/in/arnav-jain-555891194/"><img src="/assets/linkedin.svg"></img></a>
                   
                  
              </div>
              <div className="center d-flex justify-content-center flex-wrap">
                  Designed and Developed With ❤️ By Arnav Jain
              </div> 
              
            </div>
        )
    }
}
export default About