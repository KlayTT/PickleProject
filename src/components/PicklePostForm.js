import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPost } from '../api/data/postApi';

const initialState = {
  description: '',
  firebaseKey: '',
  location: '',
  pickleImg: '',
  title: '',
  uid: '',
  websiteLink: '',
};

export default function PicklePostForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);

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

    if (obj) {
      createPost({ ...formInput }).then(() => {
        resetForm();
      });
    }
  };

  return (
    <>
      <div className="card text-center">
        <h2 className="card-header">Hello</h2>
        <div className="card-body">
          <h5 className="card-title">Pickle Post</h5>
          <form onSubmit={handleSubmit}>
            <input
              id="title"
              name="title"
              value={formInput.title}
              onChange={handleChange}
              required
              placeholder="Pickle Title"
            />
            <p />
            <input
              id="description"
              name="description"
              value={formInput.description}
              onChange={handleChange}
              required
              placeholder="Pickle Description"
            />
            <p />
            <input
              id="location"
              name="location"
              value={formInput.location}
              onChange={handleChange}
              required
              placeholder="Pickle Place"
            />
            <p />
            <input
              id="pickleImg"
              name="pickleImg"
              value={formInput.pickleImg}
              onChange={handleChange}
              required
              placeholder="Pickle Picture Link"
            />
            <p />
            <input
              id="websiteLink"
              name="websiteLink"
              value={formInput.websiteLink}
              onChange={handleChange}
              required
              placeholder="Pickle WebSite"
            />
            <p />
            <button type="submit" className="btn btn-info">
              Send
            </button>
          </form>
        </div>
        <div className="card-footer text-muted">Have a good day!</div>
      </div>
    </>
  );
}

PicklePostForm.propTypes = {
  obj: PropTypes.shape(PropTypes.obj),
};

PicklePostForm.defaultProps = {
  obj: {},
};
