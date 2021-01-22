import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isUnlock, path, ...rest }) => (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
        {...rest}
        render={(props) =>
            isUnlock ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" from={path} />
            )
        }
        exact
    />
);

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isUnlock: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    // redirectTo: PropTypes.string.isRequired,
};

export default PrivateRoute;
