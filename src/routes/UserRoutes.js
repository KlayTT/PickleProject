import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import EditProfileForm from '../components/EditProfileForm';
import PicklePostForm from '../components/PicklePostForm';
import EditPost from '../views/EditPost';
import ProfileView from '../views/ProfileView';

export default function UserRoutes({ user }) {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/picklePostForm"
          component={() => <PicklePostForm user={user} />}
        />
        <Route
          exact
          path="/edit/:key"
          component={() => <EditPost user={user} />}
        />
        <Route
          exact
          path="/pickleProfile"
          component={() => <ProfileView user={user} />}
        />
        <Route
          exact
          path="/editProfile/:key"
          component={() => <EditProfileForm user={user} />}
        />
      </Switch>
    </>
  );
}

UserRoutes.propTypes = {
  user: PropTypes.string,
};

UserRoutes.defaultProps = {
  user: '',
};
