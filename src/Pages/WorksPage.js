import React, { Component } from "react";

class WorksPage extends Component {

    
    
    render() {
        
        return (
            <div>
                this is {this.props.match.path} page
                
            </div>
        )
    }
}

export default WorksPage;