import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Login.scss';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import Link from '@/components/Link';
import validator from '@/helpers/validator';
import INPUT_FIELDS from '@/helpers/validator/fields.const';
import { loginRequest } from '@/store/userActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: ''
      },
    }
  }

  validateEmail = (value) => {
    const result = validator.validateEmail(value);
    if (!result.valid) {
      this.setState({errors: { email: result.errors[0] }});
      return false;
    }
    this.setState({errors: { email: '' }});
    return true;
  };

  validatePassword = (value) => {
    const result = validator.validatePassword(value);
    if (!result.valid) {
      this.setState({errors: { password: result.errors[0] }});
      return false;
    }
    this.setState({errors: { password: '' }});
    return true;
  };

  handleFieldChange = (field, value) => {
    switch (field) {
      case INPUT_FIELDS.EMAIL:
        this.validateEmail(value);
        break;
      case INPUT_FIELDS.PASSWORD:
        this.validatePassword(value);
        break;
      default:
        break;
    }
  };

  validateLogin() {
    if (this.validateEmail(this.state.email) && this.state.validatePassword(this.state.password)) {
      // call API check errors server
      // true =>
    }
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
              onChange={(evt, val) => this.handleFieldChange(INPUT_FIELDS.EMAIL, val)}
              errors={this.state.errors.email}
            />

            <InputField
              type="password"
              name="password"
              label="Password"
              required
              onChange={(evt, val) => this.handleFieldChange(INPUT_FIELDS.PASSWORD, val)}
              errors={this.state.errors.password}
            />
            <div>{this.state.password}</div>
            <div className="btn-login">
              <Button primary block name="login" text="SIGN IN" handleClickEvent={() => this.handleLogin()}/>
            </div>
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
