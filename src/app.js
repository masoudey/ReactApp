import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Header } from "./Components/header";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import ActivePage from "./Components/ActivePage";
import { Routes } from "./Routes";
import axios from "axios";

const PathName = withRouter(({location, match}) => {
    
    return (
        location.pathname.substring(1)
    )
});

const history = createBrowserHistory();

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'react',
            activePage: PathName,
            user: null,
        }
        
    }

    componentDidMount() {
        const headers = JSON.parse(localStorage.getItem('headers'));
        if (headers && headers['x-auth-token']) {
            const user = JSON.parse(localStorage.getItem('user'));
            this.setState({user})
            console.log("did mount user", user);
        }
        console.log("did mount")
    }

    handleUserChange(user) {
        this.setState({user: user})
        console.log(this.state.user)
    }

    handlePageChange(page) {
        this.setState({activePage: page})
    }

    render() {
        
        return (
            <Router >
                <ActivePage>
                <Header 
                    changeUserState={this.handleUserChange.bind(this)} 
                    // getActivePage={this.handlePageChange.bind(this)} 
                    // user= {this.state.user}  
                    title={this.state.title}/>
                <main >
                    <Routes 
                        // user= {this.state.user} 
                        changeUserState={this.handleUserChange.bind(this)} /> 
                </main>
                <Footer />
                </ActivePage>
            </Router>
            
        )
    }
}

export default App;