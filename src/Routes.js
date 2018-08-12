import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from "./actions/userActions";

import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute"
import routes from "./RoutesConfig";


class Routes extends Component {

    componentWillMount() {
        
    }
    render() {
        const user = this.props.user;
        let regularRoutes = routes.regular.map((route, i) => <Route key={i} {...route} />);
        let privateRoutes = routes.private.map((route, i) => <PrivateRoute key={i} {...route} user={user} />);
        let publicRoutes = routes.public.map((route, i) => <PublicRoute key={i} {...route} user={user} />)
        // const headers = JSON.parse(localStorage.getItem('headers'));
        // if (headers) {
        //     console.log(headers['x-auth-token'])
        // }
        
        // if (!headers && !headers['x-auth-token']) {
        //     this.props.dispatch(logout())
        // }
        if (typeof window !== 'undefined') {window.scrollTo(0, 0);}
        
        return (
            <Switch>
                {publicRoutes}
                {privateRoutes}
                {regularRoutes}
            </Switch>
        )
    }
}

const mapStateToProps = (state) => {
    const { entities: {users}, reducers: {logedinUser} } = state;
    const user = users[logedinUser.data];
    return{
        user,
    }
}

const connectedLoginPage = withRouter(connect(mapStateToProps)(Routes));
export { connectedLoginPage as Routes };