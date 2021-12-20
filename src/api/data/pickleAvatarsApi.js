import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getpickleAvatars = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/pickleAvatars.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getpickleAvatarsUid = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/pickleAvatars.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getSinglepickleAvatar = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/pickleAvatars/${firebaseKey}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch(reject);
});

const updatePickleAvatar = (firebaseKey, updateObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/pickleAvatars/${firebaseKey}.json`, updateObj)
    .then(() => getpickleAvatars().then(resolve))
    .catch(reject);
});

const deleteProfileAvatar = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/pickleAvatars/${firebaseKey}.json`)
    .then(() => getpickleAvatars().then(resolve))
    .catch(reject);
});

export {
  getpickleAvatars,
  getSinglepickleAvatar,
  updatePickleAvatar,
  deleteProfileAvatar,
  getpickleAvatarsUid,
};
