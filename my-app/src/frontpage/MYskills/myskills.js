import React,{Component} from 'react';
import './myskills.css'
class Myskill extends Component{
   render()
   {
       return (
         <div className="myskills">
             <div className="cover row"><div className="col-sm-6 cover2"></div><div className="col-sm-6 cover2"></div></div> 
                <div className="heading"><div className="content">My Skills 📖</div></div>
                <div className="row padding display">
                  <div className="col-sm-4 center"><img src="/assets/Angular.svg"></img></div>
                  <div className="col-sm-4 center"><img src="/assets/react.svg"></img></div>
                  <div className="col-sm-4 center"><img  src="/assets/node.svg"></img></div>
                </div>
                <div className="row padding display">
                  <div className="col-sm-4 center"><img src="/assets/c.svg"></img></div>
                  <div className="col-sm-4 center"><img src="/assets/mongo.svg"></img></div>
                  <div className="col-sm-4 center"><img src="/assets/git.svg"></img></div>
                </div>
                <div className="row padding display">
                  <div className="col-sm-4 center"><img src="/assets/html5.svg"></img></div>
                  <div className="col-sm-4 center"><img src="/assets/css3.svg"></img></div>
                  <div className="col-sm-4 center"><img src="/assets/js.svg"></img></div>
                </div>
                <div className="display2">
                  <div  style={{textAlign:"center",width:"33vw"}}><img src="/assets/Angular.svg"></img></div>
                  <div  style={{textAlign:"center",width:"33vw"}}><img src="/assets/react.svg"></img></div>
                  <div  style={{textAlign:"center",width:"33vw"}}><img src="/assets/node.svg"></img></div>
                  </div>
                  <div className="display2">
                  <div  style={{textAlign:"center",width:"33vw"}}><img src="/assets/c.svg"></img></div>
                  <div  style={{textAlign:"center",width:"33vw"}}><img src="/assets/mongo.svg"></img></div>
                  <div style={{textAlign:"center",width:"33vw"}}><img src="/assets/git.svg"></img></div>
                  </div>
                  <div className="display2">
                  <div  style={{textAlign:"center",width:"33vw"}}><img src="/assets/html5.svg"></img></div>
                  <div  style={{textAlign:"center",width:"33vw"}}><img src="/assets/css3.svg"></img></div>
                  <div  style={{textAlign:"center",width:"33vw"}}><img src="/assets/js.svg"></img></div>
                </div>
               
           
         </div>       
       )
   }
}
export default Myskill