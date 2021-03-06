import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Profile from '../components/Profile';
import { getProfile } from '../api/data/profileApi';
import ProfileAvatar from '../components/ProfileAvatar';
import { getpickleAvatarsUid } from '../api/data/pickleAvatarsApi';

export default function ProfileView({ user, uid }) {
  const [profiles, setProfiles] = useState([]);
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    getProfile(uid).then(setProfiles);
    getpickleAvatarsUid(uid).then(setAvatars);
  }, []);

  return (
    <>
      {avatars.map((avatar) => (
        <ProfileAvatar
          key={avatar.firebaseKey}
          avatar={avatar}
          setAvatars={setAvatars}
          user={user}
          uid={uid}
        />
      ))}
      <p />
      {profiles.map((profile) => (
        <Profile
          key={profile.firebaseKey}
          profile={profile}
          setProfiles={setProfiles}
          user={user}
          uid={uid}
        />
      ))}
    </>
  );
}

ProfileView.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
  uid: PropTypes.string.isRequired,
};

ProfileView.defaultProps = {
  user: null,
};
