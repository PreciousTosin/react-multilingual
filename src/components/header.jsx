/* eslint import/no-extraneous-dependencies: 'off', jsx-a11y/anchor-is-valid: 'off', max-len: 'off' */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { switchLanguage } = props;
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
          <li><Link to="#" onClick={() => switchLanguage('en')}>EN</Link></li>
          <li><Link to="#" onClick={() => switchLanguage('lt')}>LT</Link></li>
          <li><Link to="#" onClick={() => switchLanguage('ru')}>RU</Link></li>
        </ul>
      </div>

    </nav>
  );
};

Header.propTypes = {
  switchLanguage: PropTypes.func,
};

Header.defaultProps = {
  switchLanguage: null,
};

export default Header;

/*
class Header extends Component {
  render() {
    const { switchLanguage } = this.props;

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
            <li><Link to="#" onClick={() => switchLanguage('en')}>EN</Link></li>
            <li><Link to="#" onClick={() => switchLanguage('lt')}>LT</Link></li>
            <li><Link to="#" onClick={() => switchLanguage('ru')}>RU</Link></li>
          </ul>
        </div>

      </nav>
    );
  }
}
*/
