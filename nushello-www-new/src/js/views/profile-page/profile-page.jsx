'use strict';
import React from 'react';
import { Link } from 'react-router';
import Reflux from 'reflux';
import ProfilePic from '../../components/pictures/profile-pic.jsx';
import ProfileEdit from '../../components/edit/profile-edit.jsx';
import ProfileAction from '../../actions/profile-action';
import ProfileStore from '../../stores/profile-store';
import Permission from 'components/permission/permission.jsx';

let UserPermission = require('constants/user-permission.js');

export default class ProfilePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { currentUser: {} };
  }

  componentDidMount() {
    this.unsubscribe = ProfileStore.listen(this.onStatusChange.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(res) {
    if (typeof res.data !== 'undefined') {
      this.setState({
        currentUser: res.data
      });
    }

    if (res.canGo) {
      this.setState({
        canGo: res.canGo
      });
      ProfileAction.init();
    }

  }

  render() {
    if ((typeof this.state.canGo === 'undefined') && (!this.state.canGo)) {
      return (
        <div>
          <Permission permission={UserPermission.EXISTING_USER_ONLY} />
        </div>
      );
    } else {
      let user = this.state.currentUser;
      return (
        <div>
          <div className="container-fluid profile">
            <div className="row">
              <div className="col-md-offset-4 col-md-4 text-center">
                <ProfilePic picUrl={ user.profilePictureUrl } />
                <h2>{ user.name }</h2>
                <ProfileEdit />
                <div className="prefs-link">
                  <Link to="prefs">
                    <button className="btn btn-default">Edit Preferences</button>
                  </Link>
                </div>
                <div className="matches-link">
                  <Link to="matches">
                    <button className="btn btn-default">Match Me</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
