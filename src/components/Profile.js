import React from 'react';
import PropTypes from 'prop-types';

export default function Profile({ profile }) {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{profile.name}</h5>
          <p className="card-text">{profile.location}</p>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  profile: PropTypes.shape(PropTypes.obj).isRequired,
};
