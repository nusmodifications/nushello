import React from 'react';

import Sidebar from '../../layouts/Sidebar/Sidebar';
import ProfilePicture from './ProfilePicture';
import ProfileEditButton from './ProfileEditButton';

export default class ProfilePage extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Sidebar />
        <div className="profile">
          <h1>User Profile</h1>
          <ProfilePicture />
          <h2>Johnny Kong</h2>
          <p>Bio:</p>
        </div>
      </div>
    );
  }
}
