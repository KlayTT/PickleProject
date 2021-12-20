import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react/cjs/react.development';
import EditAvatar from '../components/EditAvatar';
import { getSinglepickleAvatar } from '../api/data/pickleAvatarsApi';

export default function AvatarEditView({ user }) {
  const [editAvatar, setEditAvatar] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSinglepickleAvatar(key).then(setEditAvatar);
  }, []);

  return (
    <>
      <div className="edit-for-profile">
        <EditAvatar user={user} obj={editAvatar} />
      </div>
    </>
  );
}

AvatarEditView.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AvatarEditView.defaultProps = {
  user: null,
};
