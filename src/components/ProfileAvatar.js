import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  deleteProfileAvatar,
  getpickleAvatars,
} from '../api/data/pickleAvatarsApi';

export default function ProfileAvatar({ avatar, setAvatars }) {
  const handleDelete = (method) => {
    if (method === 'Delete') {
      deleteProfileAvatar(avatar.firebaseKey).then(() => {
        getpickleAvatars().then(setAvatars);
      });
    }
  };

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
        <button
          onClick={() => handleDelete('Delete')}
          className="btn btn-outline-danger"
          type="button"
        >
          Delete
        </button>
        <button type="submit" className="btn btn-info">
          submit
        </button>
      </div>
    </>
  );
}

ProfileAvatar.propTypes = {
  avatar: PropTypes.shape(PropTypes.obj).isRequired,
  setAvatars: PropTypes.func.isRequired,
};
