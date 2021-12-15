import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteProfile, getProfile } from '../api/data/profileApi';

export default function Profile({ profile, setProfiles }) {
  const handleDelete = (method) => {
    if (method === 'Delete') {
      deleteProfile(profile.firebaseKey).then(() => {
        getProfile().then(setProfiles);
      });
    }
  };

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{profile.name}</h5>
          <p className="card-text">{profile.location}</p>
          <button
            onClick={() => handleDelete('Delete')}
            className="btn btn-outline-danger"
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  profile: PropTypes.shape(PropTypes.obj).isRequired,
  setProfiles: PropTypes.func.isRequired,
};
