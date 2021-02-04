import React from "react";
import { withRouter, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import "./App.css";
import DefaultLayout from "./DefaultLayout";
import Login from "./Login";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";

function App() {
    const isLogin = true;
    return (
        <Switch>
            <PublicRoute component={Login} path="/login" isUnlock={isLogin} />
            <PrivateRoute
                path="/"
                isUnlock={isLogin}
                redirectTo="/login"
                component={DefaultLayout}
            />
        </Switch>
    );
}

App.propTypes = {
    // isLogin: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
    // isLogin: makeSelectIsLogin,
});

export default withRouter(connect(mapStateToProps)(App));
