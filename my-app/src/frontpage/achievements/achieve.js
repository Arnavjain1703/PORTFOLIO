import React,{Component} from 'react';
import './achieve.css'
import Item from '../achievements/items/items'
class Achieve extends Component{
    state=
    {
        images:[
         
            {
                img:"/assets/A3.png",
                des:"ksjdn sdknkds dsvnds cdskc idsc dscdsc dskcnd"
            },
            {
                img:"/assets/A1.png",
                des:"ksjdn sdknkds dsvnds cdskc idsc dscdsc dskcnd"
            },
            {
                img:"/assets/A5.png",
                des:"ksjdn sdknkds dsvnds cdskc idsc dscdsc dskcnd"
            },
            {
                img:"/assets/A4.png",
                des:"ksjdn sdknkds dsvnds cdskc idsc dscdsc dskcnd"
            } ,{
                img:"/assets/A6.png",
                des:"ksjdn sdknkds dsvnds cdskc idsc dscdsc dskcnd"
            },
            {
                img:"/assets/A2.png",
                des:"ksjdn sdknkds dsvnds cdskc idsc dscdsc dskcnd"
            },
           
        ]
    }
   render()
   {
       return (
            <div className="achieve">
             <div className="cover">
             <div className="heading"><div className="content">Achievements🌟</div></div>
             <div className="padding">
             <div className="scroll d-flex justify-content-around flex-wrap">
                {
                    this.state.images.map(e=>{
                        return(
                            
                            <Item  image={e.img} desc={e.des}></Item>
                            
                        )
                    })
                }
             </div>
             </div>
             </div>
            </div>
       )
   }
}
export default Achieve