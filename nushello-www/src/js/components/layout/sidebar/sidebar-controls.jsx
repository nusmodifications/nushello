'use strict';
import React from 'react';
import { Link } from 'react-router';

export default class SidebarControls extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <ul className="nav list-unstyled nh-nav">
        <li>
          Info
          <Link to="prefs">
            <img src={require('images/pref.png')}/>
          </Link>
        </li>
        <li>
          Matches
          <Link to="matches">
            <img src={require('images/matches.png')}/>
          </Link>
        </li>
        <li>
          Profile
          <Link to="profile">
            <img src={require('images/userprofile.png')}/>
          </Link>
        </li>
      </ul>
    );
  }
}
