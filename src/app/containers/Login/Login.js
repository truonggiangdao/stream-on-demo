import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Login.scss';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import Link from '@/components/Link';
import validator, {INPUT_FIELDS} from '@/helpers/validator';
import { login } from '@/store/userActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
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
      this.setState({
        email: value,
        errors: {
          ...this.state.errors,
          email: result.errors[0]
        }
      });
      return false;
    }
    this.setState({
      email: value,
      errors: {
        ...this.state.errors,
        email: ''
      }
    });
    return true;
  };

  validatePassword = (value) => {
    const result = validator.validatePassword(value);
    if (!result.valid) {
      this.setState({
        password: value,
        errors: {
          ...this.state.errors,
          password: result.errors[0]
        }
      });
      return false;
    }
    this.setState({
      password: value,
      errors: {
        ...this.state.errors,
        password: ''
      }
    });
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
    return this.validateEmail(this.state.email)
      && this.validatePassword(this.state.password);
  }

  handleLogin() {
    if (this.validateLogin()) {
      this.setState({loading: true});
      this.props.processloginRequest(
        this.state.email,
        this.state.password
      )
      .then(() => {
        this.props.history.push('/profile');
      })
      .finally(() => {
        this.setState({loading: false});
      });
    }
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
            {
              this.state.loading && (
                <p className="text-info">Loading...</p>
              )
            }
            {
              this.props.error && (
                <p className="text-danger">{this.props.error}</p>
              )
            }
            <div className="btn-login">
              <Button primary block name="login" text="SIGN IN" onClick={() => this.handleLogin()}/>
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

const mapStateToProps = state => {
  return {
    error: state.login.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processloginRequest: (email, password) => {
      return login(dispatch, {email, password});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
