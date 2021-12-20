import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Post from '../components/Post';
import { getPost } from '../api/data/postApi';
import SearchBar from '../components/SearchFilter';

export default function Home({ user, admin }) {
  const [posts, setPosts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getPost().then(setPosts);
  }, []);

  return (
    <div className="home-page">
      <div className="welcome-card">
        <div className="card border-success mb-3" style={{ width: '18rem' }}>
          <div className="card-header bg-transparent border-success">
            Welcome to the Pickle Place
          </div>
          <div className="card-body text-success">
            <h5 className="card-title">
              Enjoy some Pickle Post below for Locations and Images for Pickles
              you may be searching for.
            </h5>
            <p className="card-text">Hope you enjoy your time here!</p>
          </div>
          <div className="card-footer bg-transparent border-success">
            Sign In to create an account
          </div>
        </div>
      </div>
      <div className="search-filter">
        <SearchBar
          placeholder="Search by Location"
          func={setFilteredData}
          data={posts}
        />
      </div>
      <div className="home-post-cards">
        {filteredData.length
          ? filteredData.map((post) => (
            <Post
              key={post.firebaseKey}
              admin={admin}
              user={user}
              post={post}
              setPosts={setPosts}
            />
          ))
          : posts.map((post) => (
            <Post
              key={post.firebaseKey}
              admin={admin}
              user={user}
              post={post}
              setPosts={setPosts}
            />
          ))}
      </div>
    </div>
  );
}

Home.propTypes = {
  admin: PropTypes.bool.isRequired,
  user: PropTypes.bool.isRequired,
};
