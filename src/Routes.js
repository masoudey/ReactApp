import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute"

import HomePage from "./Pages/HomePage";
import WorksPage from "./Pages/WorksPage";
import PostsPage from "./Pages/PostsPage";
import SingleWork from "./Pages/SingleWork";
import Login from "./Pages/Login";
import AddPost from "./Pages/AddPost";


class Routes extends Component {
    render() {
        const user = this.props.user;
        return (
            <Switch>
                <PublicRoute 
                    path="/login"
                    component={Login}
                    user={user}
                />
                <Route exact path='/' component={HomePage} />
                <Route exact path='/works' component={WorksPage} />
                <Route exact path='/posts' component={PostsPage} />
                <PrivateRoute 
                    path="/addpost"
                    component={AddPost}
                    user={user}
                />
                <Route path='/works/:workid' component={SingleWork} />
                <Route path='/about' component={WorksPage} />
                <Route render= {() => <h1>Not Found!</h1>} />
            </Switch>
        )
    }
}

export default Routes;