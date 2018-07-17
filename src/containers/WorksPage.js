import React, { Component } from "react";
import "./works.css";
class WorksPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            test: ''
        }
        console.log('constructor');
    }
    
    componentDidMount() {
        console.log('did mount');
    }
    
    componentWillMount() {
        console.log('will mount')
    }

    componentWillUnmount() {
        console.log('will unmount');
    }

    componentWillUpdate() {
        console.log('will update');
    }

    shouldComponentUpdate() {
        console.log('should update');
        return true;
    }

    componentDidUpdate() {
        console.log('did update')
    }
    changeState() {
        this.setState({test: 'something'})
    }
    render() {
        console.log('render');
        return (
            <div class="work-page">
                <style>{`
                    .work-page {
                        color: green;
                    }
                    
                `}</style>

                <div class="work-block">
                    this is {this.props.match.path} page
                    <button onClick={this.changeState.bind(this)}>ok</button>
                </div>
            </div>
        )
    }
}

export default WorksPage;