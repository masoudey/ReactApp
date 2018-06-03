import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ActivePage extends Component {
    render() {
        const pathName = this.props.location.pathname;
        const activeClass = pathName.substring(1);
        console.log(this.props.location);
        return (
            <div class={`app-wrapper ${activeClass}`}>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(ActivePage);