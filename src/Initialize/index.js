import React from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import Navbar from '../components/Navbar';
import IndexRoutes from '../routes';

function Initialize() {
  return (
    <div>
      <Navbar />
      <IndexRoutes />
    </div>
  );
}

export default Initialize;
