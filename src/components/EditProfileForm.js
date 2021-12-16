import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateProfile } from '../api/data/profileApi';

const initialState = {
  avatar: '',
  firebaseKey: '',
  location: '',
  name: '',
  uid: '',
};

export default function EditProfileForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput(obj);
    } else {
      setFormInput(initialState);
    }
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (obj.firebaseKey) {
      updateProfile(obj.firebaseKey, formInput).then(() => {
        resetForm();
        history.push('/pickleProfile');
      });
    }
  };

  return (
    <>
      <div className="card text-center">
        <h2 className="card-header">Hello</h2>
        <div className="card-body">
          <h5 className="card-title">Edit Pickle your Profile</h5>
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              name="name"
              value={formInput.name}
              onChange={handleChange}
              required
              placeholder="Pickle Profile Name"
            />
            <p />
            <input
              id="location"
              name="location"
              value={formInput.location}
              onChange={handleChange}
              required
              placeholder="Pickle Profile Place"
            />
            <p />
            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </form>
        </div>
        <div className="card-footer text-muted">Have a good day!</div>
      </div>
    </>
  );
}

EditProfileForm.propTypes = {
  obj: PropTypes.shape(PropTypes.obj),
};

EditProfileForm.defaultProps = {
  obj: {},
};
