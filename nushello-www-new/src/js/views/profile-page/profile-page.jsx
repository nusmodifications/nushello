'use strict';
import React from 'react';
import Reflux from 'reflux';
import Avatar from '../../components/avatar/avatar.jsx';
import ProfileEdit from '../../components/edit/profile-edit.jsx';
import ProfileAction from '../../actions/profile-action';
import ProfileStore from '../../stores/profile-store';

require('./profile-page.scss');

export default class ProfilePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { currentUser: {} };
  }

  componentWillMount() {
    ProfileAction.init();
  }

  componentDidMount() {
    this.unsubscribe = ProfileStore.listen(this.onStatusChange.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(res) {
    console.log('status changed');
    this.setState({ currentUser: res.data });
  }

  render() {
    let user = this.state.currentUser;
    return (
      <div>
        <div className="container-fluid profile">
          <div className="row">

            <div className="col-md-3 text-center">
              <Avatar picUrl={ user.profilePictureUrl } />
              <h2>{ user.name }</h2>
              <ProfileEdit />
            </div>

            <div className="col-md-9">
              <div className="col-md-12">
                <div className="notifications">
                  <h2>Notifications</h2>
                  <hr/>
                  <ul>
                  </ul>
                </div>
              </div>

              <div className="col-md-12">
                <div className="activities">
                  <h2>Latest Activites</h2>
                  <hr/>
                  <ul>
                 </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
