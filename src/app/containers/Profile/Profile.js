import React, { Component } from 'react';
import PageTitle from '@/components/PageTitle';
import ProfileForm from './ProfileForm';
// import api, {END_POINT_KEYS, parseAPIUrl} from '@/api';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    // const params = new URLSearchParams();
    // params.append('email', 'admin@test.test');
    // params.append('password', '123456');

    // api.post(parseAPIUrl(END_POINT_KEYS.AUTH), params)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  render() {
    return (
      <div>
        <PageTitle title="Profile"/>
        <div className="layout-container profile-container">
          <ProfileForm user={this.state.user} />
        </div>
      </div>
    );
  }
};

export default Profile;