import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EditPost from '../views/EditPost';
import Home from '../views/Home';
import PicklePostFormView from '../views/PicklePostForm';
import ProfileView from '../views/ProfileView';

export default function IndexRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route
          exact
          path="/picklePostForm"
          component={() => <PicklePostFormView />}
        />
        <Route exact path="/edit/:key" component={() => <EditPost />} />
        <Route exact path="/pickleProfile" component={() => <ProfileView />} />
      </Switch>
    </>
  );
}
