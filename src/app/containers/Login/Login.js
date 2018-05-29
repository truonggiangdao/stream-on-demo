import React, { Component } from 'react';
import { connect } from 'react-redux';
// import validator from 'validator';

import './Login.scss';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import Link from '@/components/Link';

import { loginRequest } from '../../userActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  validateRules = {
    email: {
      type: 'email'
    },
    password: {
      type: 'password',
      minLen: 5,
      maxLen: 20
    },
  };

  validateLogin() {
    return false;
  }

  handleLogin() {
    if (this.validateLogin()) {
      //
    }
    return;
  }
  render() {
    return (
      <div className="container-login">
        <div className="wrapper-login">
          <div className="logo">
            <strong className="blink-logo">Bliink</strong>
          </div>
          <div className="form-login-wrapper">
            <span className="title-login">Sign In</span>
            <InputField
              type="email"
              name="email"
              label="Email"
              required
              rules={this.validateRules.email}
            />
            <InputField
              type="password"
              name="password"
              label="Password"
              required
              rulels={this.validateRules.password}
            />
            <Button name="login" text="SIGN IN" handleClickEvent={() => this.handleLogin()}/>
            <div className="text-center link-forgot-password">
              <Link text="Forgot password?"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (email, password) => {
      dispatch(loginRequest(email, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// const Linked = connect(mapStateToProps, mapDispatchToProps)(Login);
//
// export default reduxForm({
//   form: "loginForm",
//   validate,
// })(Linked);
