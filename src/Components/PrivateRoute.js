import React from "react";
import propTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import matchPropTypes from "./matchPropTypes";

const PrivateRoute = ({component: Component, user, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            user
                ? <Component user={user} {...props} />
                : <Redirect to={{pathname: "/login"}} />
        }
    />
    )

// PrivateRoute.propTypes = matchPropTypes;

export default PrivateRoute;