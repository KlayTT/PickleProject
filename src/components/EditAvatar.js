import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Dropdown from 'react-bootstrap/Dropdown';
import { updatePickleAvatar } from '../api/data/pickleAvatarsApi';

const initialState = {
  avatarName: '',
  avatarImg: '',
  firebaseKey: '',
};

export default function EditAvatar({ obj }) {
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
      updatePickleAvatar(obj.firebaseKey, formInput).then(() => {
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
          <h5 className="card-title">Edit Pickle your Avatar</h5>
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              name="name"
              value={formInput.avatarImg}
              onChange={handleChange}
              required
              placeholder="Pickle Avatar Image Link"
            />
            <p />
            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </form>
        </div>
        <div className="card-footer text-muted">Have a good day!</div>
      </div>
      {/* <div className="dropdown">
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary btn-sm"
              id="dropdown-basic"
            >
              Avatar
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
              <Dropdown.Item href="#">Avi</Dropdown.Item>
              <Dropdown.Item href="#">English</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> */}
    </>
  );
}

EditAvatar.propTypes = {
  obj: PropTypes.shape(PropTypes.obj),
};

EditAvatar.defaultProps = {
  obj: {},
};
