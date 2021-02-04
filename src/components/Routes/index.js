import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

const renderRoutes = (routes) =>
    routes.map(({ component: Component, path, name, props, ...rest }) => (
        <Route
            key={path}
            path={path}
            render={(childrenProps) => (
                <Component {...props} {...childrenProps} name={name} />
            )}
            {...rest}
        />
    ));

const Routes = ({ routeList = [] }) => (
    <Switch>{renderRoutes(routeList)}</Switch>
);

Routes.propTypes = {
    routeList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Routes;
