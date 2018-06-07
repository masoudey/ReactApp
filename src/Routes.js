import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute"

// import HomePage from "./Pages/HomePage";
// import WorksPage from "./Pages/WorksPage";
import BlogPage from "./Pages/BlogPage";
import SingleWork from "./Pages/SingleWork";
// import Login from "./Pages/Login";
import AddPost from "./Pages/AddPost";

const Loading = () => <section id="loader-wrapper">
<div id="loader"></div>
<div class="loader-section section-left"></div>
<div class="loader-section section-right"></div>
</section>

const Home = Loadable({
    loader: () => import("./Pages/HomePage"),
    loading: Loading,
    delay: 90000,
  });

  const Works = Loadable({
    loader: () => import("./Pages/WorksPage"),
    loading: Loading,
    delay: 90000,
  });

  const Login = Loadable({
    loader: () => import("./Pages/Login"),
    loading: Loading,
    delay: 90000,
  });

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
                <Route exact path='/' component={Home} />
                <Route exact path='/works' component={Works} />
                <Route exact path='/blog' component={BlogPage} />
                <PrivateRoute 
                    path="/addpost"
                    component={AddPost}
                    user={user}
                />
                <Route path='/works/:workid' component={SingleWork} />
                <Route path='/about' component={Works} />
                <Route render= {() => <h1>Not Found!</h1>} />
            </Switch>
        )
    }
}

export default Routes;