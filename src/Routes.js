import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import WorksPage from "./Pages/WorksPage";
import WorkPage from "./Pages/SingleWork";
import SingleWork from "./Pages/SingleWork";


class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/works' component={WorksPage} />
                <Route path='/works/:workid' component={SingleWork} />
                <Route path='/about' component={WorksPage} />
                <Route render= {() => <h1>Not Found!</h1>} />
            </Switch>
        )
    }
}

export default Routes;