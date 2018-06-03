import React, { Component } from "react";
import "./works.css";
class WorksPage extends Component {

    
    
    render() {
        
        return (
            <div class="work-page">
                <style>{`
                    .work-page {
                        color: green;
                    }
                    
                `}</style>

                <div >
                    this is {this.props.match.path} page
                </div>
            </div>
        )
    }
}

export default WorksPage;