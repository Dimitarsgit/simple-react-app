import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeComponent from './modules/home/components/HomeComponent';
import NotFoundPage from './pages/notFound/NotFoundPage';
import GamePage from './pages/game/GamePage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomeComponent} />
    <Route exact path="/game" component={GamePage} />

    <Route path="/" component={NotFoundPage} />
  </Switch>
);
export default Routes;
