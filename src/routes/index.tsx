import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Paths from '../constants/paths.constant';

import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path={Paths.Home} exact component={Home} />
  </Switch>
);

export default Routes;
