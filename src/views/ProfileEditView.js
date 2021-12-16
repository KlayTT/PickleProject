import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react/cjs/react.development';
import EditProfileForm from '../components/EditProfileForm';
import { getSingleProfile } from '../api/data/profileApi';

export default function EditPost({ user }) {
  const [editProfile, setEditProfile] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSingleProfile(key).then(setEditProfile);
  }, []);

  return (
    <>
      <div className="edit-for-profile">
        <EditProfileForm user={user} obj={editProfile} />
      </div>
    </>
  );
}

EditPost.propTypes = {
  user: PropTypes.string,
};

EditPost.defaultProps = {
  user: '',
};
