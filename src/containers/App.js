import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import "./App.css";
import DefaultLayout from "./DefaultLayout";

// import { makeSelectIsLogin } from "./Login/selectors";

function App(props) {
    // const { isLogin } = props;
    return <DefaultLayout isLogin={false} />;
    // return <div>Test</div>
}

App.propTypes = {
    // isLogin: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
    // isLogin: makeSelectIsLogin,
});

export default withRouter(connect(mapStateToProps)(App));
