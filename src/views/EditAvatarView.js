import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react/cjs/react.development';
import EditAvatar from '../components/EditAvatar';
import { getpickleAvatars } from '../api/data/pickleAvatarsApi';

export default function AvatarEditView({ uid, user }) {
  const [editAvatar, setEditAvatar] = useState([]);

  useEffect(() => {
    getpickleAvatars().then(setEditAvatar);
  }, []);

  return (
    <>
      <div className="edit-for-profile">
        {editAvatar.map((avatar) => (
          <EditAvatar
            key={avatar.firebaseKey}
            avatar={avatar}
            setEditAvatar={setEditAvatar}
            user={user}
            uid={uid}
          />
        ))}
      </div>
    </>
  );
}

AvatarEditView.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
  uid: PropTypes.string.isRequired,
};

AvatarEditView.defaultProps = {
  user: null,
};
