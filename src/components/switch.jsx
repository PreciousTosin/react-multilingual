/* eslint import/no-extraneous-dependencies: 'off', react/jsx-max-props-per-line: off,
react/jsx-first-prop-new-line: off */
// import React, { Component } from 'react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home';
import About from './about';
import Services from './services';

const SwitchNavRoute = content => (
  <Switch>
    <Route exact path="/" render={props => (
      <Home {...props} data={content} />
    )}
    />
    <Route exact path="/about" render={props => (
      <About {...props} data={content} />
    )}
    />
    <Route exact path="/services" render={props => (
      <Services {...props} data={content} />
    )}
    />
  </Switch>
);

export default SwitchNavRoute;


/*
class SwitchNavRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
      </Switch>
    );
  }
}
*/
