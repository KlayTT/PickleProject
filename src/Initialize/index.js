import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Navbar from '../components/Navbar';
import IndexRoutes from '../routes';

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          uid: authed.uid,
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div>
      <Navbar user={user} />
      <IndexRoutes user={user} />
    </div>
  );
}

export default Initialize;
