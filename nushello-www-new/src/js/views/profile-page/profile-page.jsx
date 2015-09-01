'use strict';
import React from 'react';
import { Link } from 'react-router';
import Reflux from 'reflux';
import ProfilePic from '../../components/pictures/profile-pic.jsx';
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
    this.setState({ currentUser: res.data });
  }

  render() {
    let user = this.state.currentUser;
    return (
      <div>
        <div className="container-fluid profile">
          <div className="row">
            <div className="col-md-offset-4 col-md-4 text-center">
              <ProfilePic picUrl={ user.profilePictureUrl } />
              <h2>{ user.name }</h2>
              <ProfileEdit />
              <Link to="prefs">
                <button className="btn btn-default">Edit Preferences</button>
              </Link>
              <Link to="matches">
                <button className="btn btn-default">Match Me</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
