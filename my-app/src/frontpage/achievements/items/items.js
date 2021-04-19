import React,{Component} from 'react';
import './items.css'
class Item extends Component{
    render(){
        return(
           <div className="item2" >
            
             <img src={this.props.image}></img>
             

           </div>
        )
    }
}
export default Item;