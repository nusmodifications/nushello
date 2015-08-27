'use strict';
import React from 'react';

require('./profile-page.scss');

export default class ProfilePage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div className="container profile">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-1">
              <h1>User Profile</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
