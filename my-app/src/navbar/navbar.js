import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
// import { Button } from "../Button"
import './navbar.css'
import { Link } from 'react-scroll';


class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems d-flex">
               <Link  className="flex-grow-1"to="landing" smooth={true} duration={1000}><p className="navbar-logo  "><img class="tradebag-logo" src="/assets/logo.svg"/></p></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    {/* <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> */}
<div id="nav-icon1" className={this.state.clicked? 'open' : 'no'}>
  <span></span>
  <span></span>
  <span></span>
</div>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'} >
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link onClick={this.handleClick} className={item.cName} to={item.url} smooth={true} duration={1000}>
                                {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                 
            </nav>
        )
    }
}

export default Navbar