import React, { Component } from 'react';
import ProfilePicture from '@/components/ProfilePicture';
import './ProfileForm.scss';
import InputField from '@/components/InputField';
import Button from '@/components/Button';

class ProfileForm extends Component {
  validateRules = {
    firstName: {},
    lastName: {},
    email: {},
  };

  handleClick() {
    return;
  }

  handleFieldChange(value) {
    console.log(value);
  }

  render() {
    return (
      <div className="profile-form padding-lg">
        <div className="row padding-lg-top">
          <div className="col-xs-8 col-xs-offset-2 col-md-4 col-md-offset-4">
            <ProfilePicture />
          </div>
        </div>

        <div className="row padding-lg-top">
          <div className="col-xs-6">
            <InputField
              type="firstName"
              name="firstName"
              label="First Name"
              rules={this.validateRules.firstName}
              onChange={(x, y) => this.handleFieldChange(y)}
            />
          </div>
          <div className="col-xs-6">
            <InputField
              type="lastName"
              name="lastName"
              label="Last Name"
              rules={this.validateRules.lastName}
            />
          </div>
        </div>

        <div className="row padding-lg-top">
          <div className="col-xs-12">
            <InputField
              type="email"
              name="email"
              label="Email"
              rules={this.validateRules.email}
            />
          </div>
        </div>

        <div className="row padding-lg-top">
          <div className="col-xs-6 text-left">
          <Button text="EDIT PASSWORD" handleClickEvent={() => this.handleClick()}/>
          </div>
          <div className="col-xs-6 text-right">
          <Button primary text="VALIDATE" handleClickEvent={() => this.handleClick()}/>
          </div>
        </div>
      </div>
    );
  }
};

export default ProfileForm;