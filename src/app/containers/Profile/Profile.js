import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageTitle from '@/components/PageTitle';
import ProfileForm from './ProfileForm';

class Profile extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Profile"/>
        <div className="layout-container profile-container">
          <ProfileForm user={this.props.user} />
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