import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

export default function PrivateRoute({
  component: Component,
  isClosed,
  needPermissions,
  ...rest
}) {
  // const { db } = useFirebase();
  const isLoggedIn = Cookies.get('userID') !== undefined;

  if (!isLoggedIn && isClosed) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  return <Route {...rest} component={Component} />;
}

PrivateRoute.defaultProps = {
  isClosed: false,
  needPermissions: false,
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
  needPermissions: PropTypes.bool,
};
