import React, { Component } from 'react';
import ProfilePicture from '@/components/ProfilePicture';
import './ProfileForm.scss';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import INPUT_FIELDS from '@/helpers/validator/fields.const';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        ...props.user,
      },
    };
  }
  handleClick() {
    return;
  }

  handleFieldChange(field, value) {
    console.log(field, value);
  }

  componentDidMount() {
    console.log(this.state.user);
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
              label={INPUT_FIELDS.FIRST_NAME}
              onChange={(evt, val) => this.handleFieldChange(INPUT_FIELDS.FIRST_NAME, val)}
            />
          </div>
          <div className="col-xs-6">
            <InputField
              type="lastName"
              name="lastName"
              label={INPUT_FIELDS.LAST_NAME}
              onChange={(evt, val) => this.handleFieldChange(INPUT_FIELDS.LAST_NAME, val)}
            />
          </div>
        </div>

        <div className="row padding-lg-top">
          <div className="col-xs-12">
            <InputField
              type="email"
              name="email"
              label={INPUT_FIELDS.EMAIL}
              onChange={(evt, val) => this.handleFieldChange(INPUT_FIELDS.EMAIL, val)}
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