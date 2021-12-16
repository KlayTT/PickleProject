import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import PicklePostForm from '../components/PicklePostForm';
import EditPost from '../views/EditPost';
import ProfileView from '../views/ProfileView';
import ProfileEditView from '../views/ProfileEditView';

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
          component={() => <ProfileEditView user={user} />}
        />
      </Switch>
    </>
  );
}

UserRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

UserRoutes.defaultProps = {
  user: null,
};
