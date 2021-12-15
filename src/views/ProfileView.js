import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import { getProfile } from '../api/data/profileApi';
import ProfileAvatar from '../components/ProfileAvatar';
import { getpickleAvatars } from '../api/data/pickleAvatarsApi';

export default function ProfileView() {
  const [profiles, setProfiles] = useState([]);
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    getProfile().then(setProfiles);
    getpickleAvatars().then(setAvatars);
  }, []);

  return (
    <>
      {avatars.map((avatar) => (
        <ProfileAvatar
          key={avatar.firebaseKey}
          avatar={avatar}
          setAvatars={setAvatars}
        />
      ))}
      <h1> Test</h1>
      {profiles.map((profile) => (
        <Profile
          key={profile.firebaseKey}
          profile={profile}
          setProfiles={setProfiles}
        />
      ))}
    </>
  );
}
