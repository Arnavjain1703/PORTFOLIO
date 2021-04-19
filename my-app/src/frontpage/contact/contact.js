import React from 'react';
import './contact.css';

class About extends React.Component {
    render(){
        return (
            <div className="contact">
             <div className="cover row"><div className="col-sm-6 cover2"></div><div className="col-sm-6 cover2"></div></div> 
               <div className="heading"><div className="content">Contact 📬</div></div> 
               
               <div className="details d-flex justify-content-center flex-wrap">
                   <a href=""><img src="/assets/facebook.svg"></img></a>
                   <a href=""><img src="/assets/twitter.svg"></img></a>
                   <a href=""><img src="/assets/insta.svg"></img></a>
                   <a href=""><img src="/assets/git2.svg"></img></a>
                   <a href=""><img src="/assets/linkedin.svg"></img></a>
              </div>
              <div className="center d-flex justify-content-center flex-wrap">
                  Designed and Developed With ❤️ By Arnav Jain
              </div> 
              
            </div>
        )
    }
}
export default About