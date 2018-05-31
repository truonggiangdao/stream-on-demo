import React, { Component } from 'react';
import ProfilePicture from '@/components/ProfilePicture';
import './ProfileForm.scss';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import validator, {INPUT_FIELDS} from '@/helpers/validator';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        ...props.user,
      },
      errors: {
        firstName: '',
        lastName: '',
      }
    };
  }

  validateName = (field, value) => {
    let name = {};
    const result = validator.validateName(value);

    name[field] = value;
    if(field === 'firstName') {
      name.errors = {
        ...this.state.errors,
        firstName: result.errors[0]
      }
    } else {
      name.errors = {
        ...this.state.errors,
        lastName: result.errors[0]
      }
    }

    if (!result.valid) {
      this.setState(name);
      return false;
    }
    this.setState(name);
    return true;
  };

  handleClick() {
    return;
  }

  handleFieldChange(field, value) {
    let fieldKey;
    switch (field) {
      case INPUT_FIELDS.FIRST_NAME:
        fieldKey = 'firstName';
        break;

      case INPUT_FIELDS.LAST_NAME:
        fieldKey = 'lastName';
        break;
    
      default:
        fieldKey = '';
        break;
    }

    this.validateName(fieldKey, value);
    const user = { ...this.state.user };
    user[fieldKey] = value;
    this.setState({user});
  }

  componentDidMount() {
    console.log(this.state.user);
  }

  render() {
    const {user} = this.state;
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
              type="text"
              name="firstName"
              label={INPUT_FIELDS.FIRST_NAME}
              value={user.firstName}
              onChange={(evt, val) => this.handleFieldChange(INPUT_FIELDS.FIRST_NAME, val)}
              errors={this.state.errors.firstName}
            />
          </div>
          <div className="col-xs-6">
            <InputField
              type="text"
              name="lastName"
              label={INPUT_FIELDS.LAST_NAME}
              value={user.lastName}
              onChange={(evt, val) => this.handleFieldChange(INPUT_FIELDS.LAST_NAME, val)}
              errors={this.state.errors.lastName}
            />
          </div>
        </div>

        <div className="row padding-lg-top">
          <div className="col-xs-12">
            <InputField
              type="email"
              name="email"
              label={INPUT_FIELDS.EMAIL}
              value={user.email}
              onChange={(evt, val) => this.handleFieldChange(INPUT_FIELDS.EMAIL, val)}
              readOnly = {true}
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