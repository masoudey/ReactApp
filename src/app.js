import React, { Component } from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'masoud',
            title: 'react'
        }
    }

    changeTitle (ti) {
        this.setState({title: ti})
    }

    render() {
        setTimeout(() => {
            this.setState({name: 'bob'})
        }, 3000);
        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                <main>
                    <div>{this.state.name}</div>
                </main>
                <Footer name={this.state.name}/>
            </div>
        )
    }
}

export default App;