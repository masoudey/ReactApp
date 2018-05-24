import React, { Component } from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Routes from "./Routes";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'react'
        }
    }

    render() {
        
        return (
            <div>
                <Router>
                   <div>
                   <Header  title={this.state.title}/>
                    <main style={{marginTop: '4rem'}}>
                        <Routes /> 
                    </main>
                    <Footer />
                   </div>
                </Router>
            </div>
        )
    }
}

export default App;