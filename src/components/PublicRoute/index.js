import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
    component: Component,
    restricted,
    isUnlock,
    path,
    ...rest
}) => (
    <Route
        {...rest}
        render={(props) =>
            isUnlock && restricted ? (
                <Redirect to="/home" from={path} />
            ) : (
                <Component {...props} />
            )
        }
    />
);

PublicRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isUnlock: PropTypes.bool.isRequired,
    restricted: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
};

export default PublicRoute;
