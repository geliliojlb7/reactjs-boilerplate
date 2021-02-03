import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import './App.css';
import DefaultLayout from './DefaultLayout';
import Login from './Login';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

// import { makeSelectIsLogin } from "./Login/selectors";

function App(props) {
  // const { isLogin } = props;
  return (
    <Switch>
      <PublicRoute
        component={Login}
        path="/login"
        isUnlock={true}
      />
      <PrivateRoute
        path="/"
        isUnlock={true}
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
