import React, { Component } from 'react';
import ProfilePicture from '@/components/ProfilePicture';
import './ProfileForm.scss';

class ProfileForm extends Component {
  render() {
    return (
      <div className="profile-form padding-lg">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2 col-md-4 col-md-offset-4">
            <ProfilePicture />
          </div>
        </div>
      </div>
    );
  }
};

export default ProfileForm;