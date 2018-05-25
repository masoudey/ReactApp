import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, Button } from "mdbreact";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';


class Header extends Component {

    
    render() {
        return (
            <header>
                <Navbar color="" dark expand="md" fixed="top" scrolling>
                    <NavbarBrand href="/">
                        <img src='' alt="" height="20" />  ReactMS
                    </NavbarBrand>
                    <NavbarToggler />
                    <div class="collapse navbar-collapse" id="reactNavbar">
                        <NavbarNav right={true} class="mr-2" >
                            <NavItem>
                                <NavLink class="nav-link" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink class="nav-link" to="/works">Works</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink class="nav-link" to="/about">About</NavLink>
                            </NavItem>
                        </NavbarNav>
                    </div>
                </Navbar>  
            </header>
        )
    }
}

export default Header;