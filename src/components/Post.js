import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deletePost, getPost } from '../api/data/postApi';

export default function Post({ post, setPosts, admin }) {
  const handleDelete = (method) => {
    if (method === 'Delete') {
      deletePost(post.firebaseKey).then(() => {
        getPost().then(setPosts);
      });
    }
  };

  return (
    <div>
      <div className="card mb-3" style={{ width: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={post.pickleImg}
              className="img-fluid rounded-start"
              alt="pickle"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.description}</p>
              <p className="card-text">
                <small className="text-muted">{post.location}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">{post.websiteLink}</small>
              </p>
              {admin ? (
                <Link
                  to={`/edit/${post.firebaseKey}`}
                  className="btn btn-outline-warning"
                >
                  Edit
                </Link>
              ) : null}
              {admin ? (
                <button
                  onClick={() => handleDelete('Delete')}
                  className="btn btn-outline-danger"
                  type="button"
                >
                  Delete
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape(PropTypes.obj).isRequired,
  setPosts: PropTypes.func.isRequired,
  admin: PropTypes.bool.isRequired,
};
