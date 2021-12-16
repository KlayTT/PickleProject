import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getProfile = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/pickleProfiles.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createProfile = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/pickleProfiles.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/pickleProfiles/${firebaseKey}.json`, {
          firebaseKey,
        })
        .then(() => {
          getProfile().then(resolve);
        });
    })
    .catch(reject);
});

const deleteProfile = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/pickleProfiles/${firebaseKey}.json`)
    .then(() => getProfile().then(resolve))
    .catch(reject);
});

const getSingleProfile = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/pickleProfiles/${firebaseKey}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch(reject);
});

const updateProfile = (firebaseKey, updateObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/pickleProfiles/${firebaseKey}.json`, updateObj)
    .then(() => getProfile().then(resolve))
    .catch(reject);
});

export {
  getProfile,
  deleteProfile,
  getSingleProfile,
  updateProfile,
  createProfile,
};
