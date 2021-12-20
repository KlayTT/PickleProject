import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import PicklePostForm from '../components/PicklePostForm';
import EditPost from '../views/EditPost';
import ProfileView from '../views/ProfileView';
import ProfileEditView from '../views/ProfileEditView';
import EditAvatarView from '../views/EditAvatarView';

export default function UserRoutes({ user, uid }) {
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
          component={() => <ProfileView user={user} uid={uid} />}
        />
        <Route
          exact
          path="/editProfile"
          component={() => <ProfileEditView user={user} uid={uid} />}
        />
        <Route
          exact
          path="/editAvatar/:key"
          component={() => <EditAvatarView user={user} />}
        />
      </Switch>
    </>
  );
}

UserRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
  uid: PropTypes.string.isRequired,
};

UserRoutes.defaultProps = {
  user: null,
};
