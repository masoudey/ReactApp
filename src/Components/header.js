import React, { Component } from "react";

class Header extends Component {

    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }
    
    render() {
        return (
            <header>
                <div>{this.props.title}</div>
                <input type="text" onChange={this.handleChange.bind(this)}/>
            </header>
        )
    }
}

export default Header;