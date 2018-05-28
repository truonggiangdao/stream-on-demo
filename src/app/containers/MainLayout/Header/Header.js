import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">BLINK</a>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><NavLink to="/login">Logout</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Header;