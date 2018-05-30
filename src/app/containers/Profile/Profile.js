import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageTitle from '@/components/PageTitle';
import ProfileForm from './ProfileForm';
import './Profile.scss';

class Profile extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Profile"/>
        <div className="layout-container profile-container">
          { this.props.user.id && (
            <ProfileForm user={this.props.user} />
          )}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Profile);