/* eslint import/no-extraneous-dependencies: 'off', class-methods-use-this: 'off',
jsx-a11y/anchor-is-valid: 'off', max-len: 'off' */

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import SwitchNavRoute from './switch';
import Header from './header';

import '../public/stylesheets/style.css';

// const $ = require('jquery');

class App extends Component {
  constructor() {
    super();

    this.state = {
      // pageLoaded: false,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <h1>ReactJS scaffold</h1>
          <SwitchNavRoute />
        </div>
      </div>
    );
  }
}

render((
  <Router>
    <App />
  </Router>
), document.getElementById('app'));
