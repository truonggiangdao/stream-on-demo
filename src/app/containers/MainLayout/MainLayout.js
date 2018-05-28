import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from '../Home';
import EditProfile from '../EditProfile';

class MainLayout extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">Brand</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/profile">Profile</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/profile" component={EditProfile}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default MainLayout;