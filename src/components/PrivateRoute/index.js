import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  isUnlock,
  redirectTo,
  path,
  ...rest
}) => {
  if (isUnlock) {
    return (
      <Route path={path} render={props => <Component {...props} />} {...rest} />
    );
  }

  return <Redirect to={redirectTo} from={path} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isUnlock: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
