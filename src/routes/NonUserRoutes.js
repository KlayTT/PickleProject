import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';

export default function NonUserRoutes({ user, admin }) {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home user={user} admin={admin} />}
        />
      </Switch>
    </>
  );
}

NonUserRoutes.propTypes = {
  user: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired,
};
