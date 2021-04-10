  
import React from 'react';
import './navbar.css';
import {NavLink} from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap'
class Navbars extends React.Component{
    render(){
        return(
            
            <div className='app'>
               <Navbar variant="dark" id="Navbar"  collapseOnSelect expand="lg">
               <NavLink  exact className="logo" activeClassName="active" to="/"><span style={{marginLeft:"20px",color:"white",fontSize:"30px",letterSpacing:"3px"}}><span style={{color:"#E784A7"}}>/</span>AJ</span></NavLink>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto"></Nav>
               <Nav>
               <Nav.Link    id="nav-link" ><NavLink id="Navlink" exact c to="/login">Login</NavLink></Nav.Link>
               <Nav.Link     id="nav-link">
               <NavLink    exact id="Navlink"  to="/signup">Signup</NavLink>
               </Nav.Link> 
               <Nav.Link     id="nav-link">
               <NavLink    exact id="Navlink"  to="/signup">Signup</NavLink>
               </Nav.Link> 
               <Nav.Link     id="nav-link">
               <NavLink    exact id="Navlink"  to="/signup">Signup</NavLink>
               </Nav.Link> 
               </Nav>
               </Navbar.Collapse> 
               </Navbar>
            </div>
        )
    }
} 
export default Navbars;