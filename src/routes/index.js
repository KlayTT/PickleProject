import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import PicklePostFormView from '../views/PicklePostForm';

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
      </Switch>
    </>
  );
}
