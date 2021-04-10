import React from 'react';
import './cursor.css';


class Cursor extends React.Component{
    state=
    {
        top:0,
        left:0,

    };
    componentDidMount()
    {
        document.addEventListener('mouseover',(e)=>
        {
                 this.setState({top:e.clientY,left:e.clientX})
        })
        
    }
    render(){
        return(
            <div className="cursor">
               {/* <div style={{top:this.state.top,left:this.state.left}}  className="cursor1">
               
               </div>
               <div style={{top:this.state.top,left:this.state.left}} className="cursor2">

                </div> */}
            </div>
        )
    }
}
export default Cursor