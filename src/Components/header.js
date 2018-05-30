import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, Button, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from "mdbreact";
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';


class Header extends Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
            exposed: false,
            activePage: '',
            dropdownOpen: false,
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed: collapsed,exposed: true})
        
    }
    navExpose() {
        const exposed = !this.state.exposed;
        this.setState({exposed: exposed})
    }
    setActivePage(match, location)  {
        if (!match) {
            return false
        }
        // console.log(match,location,this);
        this.state.activePage=  location.pathname;
        
    }
    logout() {
        this.props.changeUserState(undefined);
    }
    
    render() {
        const { collapsed, exposed } = this.state;
        const navClass = collapsed ? "show" : '';
        const toggleBtnClass = collapsed ? '' : 'collapsed';
        const navBtnClass = exposed || !collapsed ? 'nav-exposed' : '';
        const user = this.props.user;
        
        return (
            <header>
                <Navbar color="" dark expand="md" fixed="top" scrolling>
                    <NavbarBrand href="/">
                        <img src='' alt="" height="20" />  ReactCMS
                    </NavbarBrand>
                    <NavbarToggler class={toggleBtnClass} onClick={this.toggleCollapse.bind(this)} />
                    <div class={`collapse navbar-collapse ${navClass}  ${navBtnClass}` } id="reactNavbar">
                        
                        <NavbarNav right={true} class="mr-3" >
                                
                                <NavLink exact activeClassName="active" class="nav-link" to="/">Home</NavLink>
                           
                          
                                <NavLink activeClassName="active" class="nav-link" to="/works">Works</NavLink>
                                <NavLink 
                                    activeClassName="active" 
                                    isActive={this.setActivePage.bind(this)} 
                                    class="nav-link" 
                                    to="/posts">
                                    Posts
                                </NavLink>
                                
                                <NavLink activeClassName="active" class="nav-link" to="/about">About</NavLink>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle nav={true}  color="primary">
                                    <span class="icon-user"></span> 
                                    {user && ` ${user.name}`}
                                </DropdownToggle>
                                <DropdownMenu>
                                    {!user && <Link to="/login">LogIn</Link>}
                                    {user && <Link to="/addpost">Add Post</Link>}
                                    {user && <DropdownItem onClick={this.logout.bind(this)} href="#">Logout</DropdownItem>}
                                </DropdownMenu>
                                </Dropdown>
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