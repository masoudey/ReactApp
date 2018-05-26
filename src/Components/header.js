import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, Button } from "mdbreact";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';


class Header extends Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
            exposed: false,
        }
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed: collapsed,exposed: true})
        
    }
    navExpose() {
        const exposed = !this.state.exposed;
        this.setState({exposed: exposed})
    }
    
    render() {
        const { collapsed, exposed } = this.state;
        const navClass = collapsed ? "show" : '';
        const toggleBtnClass = collapsed ? '' : 'collapsed';
        const navBtnClass = exposed || !collapsed ? 'nav-exposed' : '';
        return (
            <header>
                <Navbar color="" dark expand="md" fixed="top" scrolling>
                    <NavbarBrand href="/">
                        <img src='' alt="" height="20" />  ReactMS
                    </NavbarBrand>
                    <NavbarToggler class={toggleBtnClass} onClick={this.toggleCollapse.bind(this)} />
                    <div class={`collapse navbar-collapse ${navClass}  ${navBtnClass}` } id="reactNavbar">
                        
                        <NavbarNav right={true} class="mr-3" >
                            
                                <NavLink exact activeClassName="active" class="nav-link" to="/">Home</NavLink>
                           
                          
                                <NavLink activeClassName="active" class="nav-link" to="/works">Works</NavLink>
                          
                           
                                <NavLink activeClassName="active" class="nav-link" to="/about">About</NavLink>
                           
                        </NavbarNav>
                        <div class={`nav-button `} onClick={this.navExpose.bind(this)}>
                            <div class="hamburger">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                            <div id="menu-click-area"></div>
                        </div>
                    </div>
                </Navbar>  
            </header>
        )
    }
}

export default Header;