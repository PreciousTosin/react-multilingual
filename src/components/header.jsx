/* eslint import/no-extraneous-dependencies: 'off', jsx-a11y/anchor-is-valid: 'off', max-len: 'off' */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const data = this.props.data;
    const switchLanguage = this.props.switchLanguage;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span><Link className="navbar-brand" to="/">XML</Link></span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
          </ul>

          <ul className="navbar-nav navbar-right">
            <li><Link to="#" onClick={switchLanguage.bind(this, 'en')}>EN</Link></li>
            <li><Link to="#" onClick={switchLanguage.bind(this, 'lt')}>LT</Link></li>
            <li><Link to="#" onClick={switchLanguage.bind(this, 'ru')}>RU</Link></li>
          </ul>
        </div>

      </nav>
    );
  }
}
/*

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a><Link className="navbar-brand" to="/">XML</Link></a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
      </ul>
    </div>

    <ul className="nav navbar-nav navbar-right">
      <li><a href="#" data-target="#" onClick={switchLanguage.bind(this, 'en')}>EN</a></li>
      <li><a href="#" data-target="#" onClick={switchLanguage.bind(this, 'lt')}>LT</a></li>
      <li><a href="#" data-target="#" onClick={switchLanguage.bind(this, 'ru')}>RU</a></li>
    </ul>
  </nav>
);
*/

export default Header;
