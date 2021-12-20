import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signInUser, signOutUser } from '../api/auth';

export default function Navbar({ user }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Pickle Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            {user ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/picklePostForm"
                  >
                    Pickle Post
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/pickleProfile">
                    Pickle Profile
                  </a>
                </li>
              </ul>
            ) : null}

            <div>
              {user ? (
                <button
                  onClick={signOutUser}
                  type="button"
                  className="btn btn-danger border border-dark"
                >
                  Log Out
                </button>
              ) : (
                <button
                  onClick={signInUser}
                  type="button"
                  className="btn btn-danger border border-dark"
                >
                  Log In
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  user: PropTypes.bool.isRequired,
};
