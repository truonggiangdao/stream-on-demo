import React, { Component } from 'react';
import PageTitle from '@/components/PageTitle';
// import api, {END_POINT_KEYS, parseAPIUrl} from '@/api';

class EditProfile extends Component {
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
        <div className="container">
          Edit Profile Page
        </div>
      </div>
    );
  }
};

export default EditProfile;