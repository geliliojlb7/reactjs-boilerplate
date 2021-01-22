import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import PublicRoute from "../PublicRoute";
import PrivateRoute from "../PrivateRoute";
import NoMatch from "../NoMatch";

/* eslint-disable indent */

const renderPublicRoutes = (routes, isLogin) =>
    routes
        .filter((item) => item.authMode === "public")
        .map((item) => {
            const { name, path, component, restricted, ...rest } = item;
            return (
                <PublicRoute
                    key={name}
                    restricted={restricted}
                    component={component}
                    path={path}
                    isUnlock={isLogin}
                    {...rest}
                />
            );
        });

const renderPrivateRoutes = (routes, isLogin) =>
    routes
        .filter((item) => item.authMode === "private")
        .map((item) => {
            const { name, path, component, ...rest } = item;

            return (
                <PrivateRoute
                    key={name}
                    component={component}
                    path={path}
                    isUnlock={isLogin}
                    {...rest}
                />
            );
        });

const Routes = ({ routeList = [], isLogin }) => (
    <Switch>
        {renderPrivateRoutes(routeList, isLogin)}
        {renderPublicRoutes(routeList, isLogin)}
        <Route path="*">
            <NoMatch />
        </Route>
    </Switch>
);

Routes.propTypes = {
    routeList: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLogin: PropTypes.bool.isRequired,
};

export default Routes;
