import React,{Component} from 'react';
import './items.css'
class Item extends Component{
    render(){
        return(
           <div className="item2" >
              <div className="desk">{this.props.desc}</div>
             <img src={this.props.image}></img>
             <div className="overlay">
             </div>
             
           </div>
        )
    }
}
export default Item;