import React from 'react';
import PropTypes from 'prop-types';
import UserRoutes from './UserRoutes';
import NonUserRoutes from './NonUserRoutes';

export default function IndexRoutes({ user }) {
  return (
    <>
      {user ? <UserRoutes user={user} /> : ''}
      <NonUserRoutes />
    </>
  );
}

IndexRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

IndexRoutes.defaultProps = {
  user: null,
};
