'use strict';
import React from 'react';
import { Link } from 'react-router';

require('./chat-item.scss');

export default class ChatItem extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    var userProfilePage = '/';
    return (
      <li className="chat-item">
        <Link to="chat">
          <img className="img-circle" src={this.props.photoUrl}/> {this.props.name}
        </Link>
      </li>
    );
  }
}
