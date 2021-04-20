import React,{Component} from 'react';
import './achieve.css'
import Item from '../achievements/items/items'
import Aos from 'aos';
import 'aos/dist/aos.css'
class Achieve extends Component{
    componentDidMount()
  {

    Aos.init({
 
     offset: 40,
     duration: 500,
     easing: 'ease-in-sine',
   });
  }
    state=
    {
        images:[
         
            {
                img:"/assets/A3.png",
                des:"In a 54 hours marathon of startup weekend in partnership with Google, we secured the 2nd Position."
            },
            {
                img:"/assets/A1.png",
                des:"Mentored at Algorithm( Workshop on Competitive Programming) with 200+ Participants"
            },
            
            {
                img:"/assets/A4.png",
                des:"3 🌟 Programmer on Codechef"
            } ,{
                img:"/assets/A5.png",
                des:"Certification For Problem Solving"
            },
            {
                img:"/assets/A2.png",
                des:"Performed in well-staged and themed college Fest-Team Taal"
            },
           
        ]
    }
   render()
   {
       return (
            <div className="achieve">
                <div data-aos="fade-up" className="heading"><div className="content">Achievements🌟</div></div>
             <div className="cover">
             
             <div className="padding">
             <div className="scroll d-flex justify-content-around flex-wrap">
                {
                    this.state.images.map(e=>{
                        return(
                            
                            <Item data-aos="fade-up" className="item"  image={e.img} desc={e.des}></Item>
                            
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