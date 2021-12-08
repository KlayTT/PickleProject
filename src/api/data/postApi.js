import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getPost = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/picklePost.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createPost = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/picklePost.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/picklePost/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getPost().then(resolve);
        });
    })
    .catch(reject);
});

const deletePost = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/picklePost/${firebaseKey}.json`)
    .then(() => getPost().then(resolve))
    .catch(reject);
});

export { getPost, createPost, deletePost };
