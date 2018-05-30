import React, { Component } from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Routes from "./Routes";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'react',
            user: {name: 'Masoud'}
        }
    }

    changeUserState(user) {
        this.setState({user})
    }

    render() {
        return (
            <Router>
                <div>
                <Header changeUserState={this.changeUserState.bind(this)} user= {this.state.user}  title={this.state.title}/>
                <main style={{marginTop: '6rem'}}>
                    <Routes user= {this.state.user} /> 
                </main>
                <Footer />
                </div>
            </Router>
            
        )
    }
}

export default App;