import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from './pages/notFound/NotFoundPage';
import GamePage from './pages/game/GamePage';
import HomePage from './pages/home/HomePage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/game" component={GamePage} />

    <Route path="/" component={NotFoundPage} />
  </Switch>
);
export default Routes;
