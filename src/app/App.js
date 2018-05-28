import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.scss';
import { User } from './components/User';
import { Main } from './components/Main';
import Login from './containers/Login';
import EditProfile from './containers/EditProfile';
import { setName } from './userActions';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Main changeUsername={() => this.props.setName("Anna")}/>
        <User username={this.props.user.name}/>

        <BrowserRouter>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/profile">Edit Profile</Link>

            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/profile" component={EditProfile}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
