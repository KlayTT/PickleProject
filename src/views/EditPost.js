import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import PicklePostForm from '../components/PicklePostForm';
import { getSinglePost } from '../api/data/postApi';

export default function EditPost() {
  const [editItem, setEditItem] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSinglePost(key).then(setEditItem);
  }, []);

  return (
    <>
      <div className="edit-for-page">
        <h1>Edit Pickle Post {editItem.title}</h1>
        <PicklePostForm obj={editItem} />
      </div>
    </>
  );
}
