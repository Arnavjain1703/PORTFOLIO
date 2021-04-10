import React from 'react';
import './item.css';
import Tilt from 'react-vanilla-tilt'

class Item extends React.Component{
    render(){
        return(
            <div className="Item">
                <Tilt style={{margin:"0px",padding:"0px"}} options={{ scale:1000, max: 100 }}>
  <div >
   <img  src={this.props.image}></img>
  </div>
</Tilt>
                
            </div>
        )
    }
};
export default Item