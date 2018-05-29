import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from '../Home';
import EditProfile from '../EditProfile';
import './MainLayout.scss';

class MainLayout extends Component {
  render() {
    return (
      <div className="header-fixed">
        <Header/>
        <div>
          <Route path={`${this.props.match.path}profile`} component={EditProfile}/>
          <Route exact path={this.props.match.path} component={Home}/>
        </div>
      </div>
    );
  }
};

export default MainLayout;