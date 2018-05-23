import React, { Component } from "react";

class Footer extends Component {
    
    render() {
        return (
            <footer>
                {this.props.name}
            </footer>
        )
    }
}

export default Footer;