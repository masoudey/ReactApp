import React, { Component } from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import ActivePage from "./Components/ActivePage";
import Routes from "./Routes";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'react',
            activePage: '',
            user: {name: 'Masoud'}
        }
    }

    handleUserChange(user) {
        this.setState({user})
    }

    handlePageChange(page) {
        this.setState({activePage: page})
    }

    render() {
        
        return (
            <Router>
                <ActivePage>
                <Header 
                    changeUserState={this.handleUserChange.bind(this)} 
                    // getActivePage={this.handlePageChange.bind(this)} 
                    user= {this.state.user}  
                    title={this.state.title}/>
                <main >
                    <Routes user= {this.state.user} /> 
                </main>
                <Footer />
                </ActivePage>
            </Router>
            
        )
    }
}

export default App;