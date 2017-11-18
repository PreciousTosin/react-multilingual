/* eslint import/no-extraneous-dependencies: 'off' */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home';
import About from './about';
import Services from './services';

const SwitchNavRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/services" component={Services} />
  </Switch>
);

export default SwitchNavRoute;
