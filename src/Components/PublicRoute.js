import React from "react";
import propTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import matchPropTypes from "./matchPropTypes";

const PrivateRoute = ({component: Component, user, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            user
                ? <Redirect to={{pathname: "/"}} />
                : <Component user={user} {...props} />
        }
    />
)

// PrivateRoute.propTypes = matchPropTypes;

export default PrivateRoute;