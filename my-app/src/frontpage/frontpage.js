import React,{Component} from 'react';
import Landing from './landing/landing'
import About from './About/About'
import Navbar from '../navbar/navbar';
import Project from '../projects/project';
import MYskills from './MYskills/myskills'
import Achieve from './achievements/achieve'
import Contact from './contact/contact'
import './frontpage.css'
class Frontpage extends Component{
   render()
   {
       return (
        <div >
        <div className="frontpage" >
        {/* <Navbar></Navbar> */}
        <Landing></Landing>
        <Project></Project>
         <About></About>
        <MYskills ></MYskills >
        <Achieve></Achieve>
        <Contact></Contact>
        </div>
         </div>

       )
   }
}
export default Frontpage