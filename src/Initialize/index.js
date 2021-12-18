import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Navbar from '../components/Navbar';
import UserRoutes from '../routes/UserRoutes';
import NonUserRoutes from '../routes/NonUserRoutes';
import firebaseConfig from '../api/apiKeys';

function Initialize() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          uid: authed.uid,
        };
        setUser(userInfoObj);
        setLoggedIn(true);
        console.warn(userInfoObj, firebaseConfig.adminUid);
        if (userInfoObj.uid === firebaseConfig.adminUid) {
          setAdmin(userInfoObj);
        }
      } else if (user || user === null) {
        setUser(false);
        setLoggedIn(false);
        setAdmin(false);
      }
    });
  }, []);

  return (
    <div>
      <Navbar user={loggedIn} />
      {user && <UserRoutes uid={user.uid} user={user} admin={admin} />}
      <NonUserRoutes user={loggedIn} admin={admin} />
    </div>
  );
}

export default Initialize;
