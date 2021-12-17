import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Navbar from '../components/Navbar';
import UserRoutes from '../routes/UserRoutes';
import NonUserRoutes from '../routes/NonUserRoutes';

function Initialize() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          uid: authed.uid,
        };
        setUser(userInfoObj);
        setLoggedIn(true);
      } else if (user || user === null) {
        setUser(false);
        setLoggedIn(false);
      }
    });
  }, []);

  return (
    <div>
      <Navbar user={loggedIn} />
      {user && <UserRoutes user={user} />}
      <NonUserRoutes />
    </div>
  );
}

export default Initialize;
