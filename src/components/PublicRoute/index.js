import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
  component: Component,
  isUnlock,
  path,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isUnlock ? <Redirect to="/home" from={path} /> : <Component {...props} />
    }
  />
);

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isUnlock: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

export default PublicRoute;
