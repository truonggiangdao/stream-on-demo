import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Login from './containers/Login';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;
