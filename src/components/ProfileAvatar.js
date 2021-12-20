import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProfileAvatar({ avatar }) {
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img src={avatar.avatarImg} className="card-img-top" alt="pickleImg" />
        <Link
          to={`/editAvatar/${avatar.firebaseKey}`}
          className="btn btn-outline-warning"
        >
          Edit
        </Link>
      </div>
    </>
  );
}

ProfileAvatar.propTypes = {
  avatar: PropTypes.shape(PropTypes.obj).isRequired,
};
