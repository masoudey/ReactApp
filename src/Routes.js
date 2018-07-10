import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import { logout } from "./actions/userActions";

import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute"

// import Home from "./containers/HomePage";
// import Works from "./containers/WorksPage";
import { BlogPage } from "./containers/BlogPage";
import SingleWork from "./containers/SingleWork";
import SinglePost from "./containers/SinglePost";
// import Login from "./containers/Login";
import AddPost from "./containers/AddPost";

const Loading = () => <section id="loader-wrapper">
<div id="loader"></div>
<div class="loader-section section-left"></div>
<div class="loader-section section-right"></div>
</section>

const Home = Loadable({
    loader: () => import("./containers/HomePage"),
    loading: Loading,
    modules: ["./containers/HomePage"],
    webpack: () => [require.resolveWeak("./containers/HomePage")],
    delay: 90000,
  });

  const Works = Loadable({
    loader: () => import("./containers/WorksPage"),
    loading: Loading,
    delay: 90000,
  });

  const Login = Loadable({
    loader: () => import("./containers/Login"),
    loading: Loading,
    delay: 90000,
  });

class Routes extends Component {

    componentDidMount() {
        
    }
    render() {
        // const headers = JSON.parse(localStorage.getItem('headers'));
        // if (headers) {
        //     console.log(headers['x-auth-token'])
        // }
        
        // if (!headers && !headers['x-auth-token']) {
        //     this.props.dispatch(logout())
        // }
        const user = this.props.user;
        // console.log(user);
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
                <Route exact path='/blog/:postid' component={SinglePost} />
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

const mapStateToProps = (state) => {
    const { user } = state.user
    return{
        user,
    }
}

const connectedLoginPage = withRouter(connect(mapStateToProps)(Routes));
export { connectedLoginPage as Routes };