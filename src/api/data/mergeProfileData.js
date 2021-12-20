import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getProfileByKey = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(
      `${baseURL}/pickleProfiles.json?orderBy="firebaseKey"&equalTo="${firebaseKey}"`,
    )
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getProfileByKey;
