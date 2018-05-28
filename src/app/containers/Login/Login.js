import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { reduxForm } from "redux-form";
import style from './style.scss';
import validate from './validate';
import { loginRequest } from '../../userActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false
    }
  }

  handleSubmit() {
    return true;
  }
  render() {
    return (
      <div className="wrapper-login">
        <div className="login">
          <div className="logo">
            <strong className="blink-logo">Bliink</strong>
          </div>
          <div className="form-wrapper">
            <div className="container">
              <span className="title-login">Sign In</span>
              {/*<form onSubmit={this.handleSunmit.bind(this)}>*/}
              <form>
                <div className="form-group">
                  <label><span>Email<span className="required">*</span></span>
                  </label>
                  <input type="text" className="input-field clear" name=""/>
                </div>
                <div className="form-group">
                  <label><span>Password <span className="required">*</span></span>
                  </label>
                  <input type="password" className="input-field clear" name="field2"/>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn-login">Sign In</button>
                  <p className="link-forgot-password">Forgot password?</p>
                </div>
              </form>
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
