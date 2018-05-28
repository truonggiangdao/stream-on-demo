import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from '../Home';
import EditProfile from '../EditProfile';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <Route path="/profile" component={EditProfile}/>
          <Route exact path="/" component={Home}/>
        </div>
      </div>
    );
  }
};

export default MainLayout;