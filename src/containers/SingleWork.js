import React, { Component } from "react";

class SingleWork extends Component {

    
    
    render() {
        const workId = this.props.match.params.workid;
        return (
            <div>
               this is {workId}
            </div>
        )
    }
}

export default SingleWork;