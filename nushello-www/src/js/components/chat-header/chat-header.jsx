'use strict';
import React from 'react';
import { Link } from 'react-router';
import Avatar from '../avatar/avatar.jsx';

export default class ChatHeader extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let friend = this.props.friend;
    return (
      <div className="chat-header">
        <div className="row">
          <div className="header-bio col-md-3 text-center">
            <p>{friend.faculty}</p>
            <p>{friend.firstMajor}</p>
          </div>
          <div className="col-md-3 text-center">
            <h2>{friend.fakeName}</h2>
            <p>{friend.bio}</p>
          </div>
          <div className="header-info col-md-3 text-center">
            <button className="btn btn-default" onClick={this._revealIdentity}>Reveal my identity</button>
          </div>
        </div>
      </div>
    );
  }

  _revealIdentity() {
    console.log('Revealing...');
  }
}
