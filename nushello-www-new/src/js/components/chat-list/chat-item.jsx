'use strict';
import React from 'react';
import { Link } from 'react-router';
import Avatar from '../avatar/avatar.jsx';

export default class ChatItem extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    var userProfilePage = '/';
    return (
        <Link to="chat">
          <div className="row">
            <div className="col-sm-4">
              <Avatar letter={this.props.name[0].toUpperCase()} />
            </div>
            <div className="col-sm-8 name">
              <p>{this.props.name}</p>
            </div>
          </div>
        </Link>
    );
  }
}
