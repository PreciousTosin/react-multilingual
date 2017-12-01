/* eslint import/no-extraneous-dependencies: 'off', class-methods-use-this: 'off',
jsx-a11y/anchor-is-valid: 'off', max-len: 'off' */

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';

// import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import store, { history } from './store';

import App from './components/app';

import '../public/stylesheets/style.css';

// const $ = require('jquery');

render((
  <Provider {... { store }}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
), document.getElementById('app'));


/*
class Index extends Component {
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
*/
/*

render((
  <Router>
    <Index />
  </Router>
), document.getElementById('app'));
*/

// const store = createStore(content);
