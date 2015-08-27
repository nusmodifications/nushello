import React      from 'react';

import Sidebar    from '../../layouts/Sidebar/Sidebar';

export default class ProfilePage extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
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
