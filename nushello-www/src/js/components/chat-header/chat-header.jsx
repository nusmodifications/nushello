'use strict';
import React from 'react';
import { Link } from 'react-router';
import Avatar from '../avatar/avatar.jsx';

export default class ChatHeader extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="chat-header">
        <div className="row">
          <div className="col-md-3">
            <p>{this.props.name}</p>
          </div>
          <div className="col-md-9">
            <p>Computer Science</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>I love to talk to strangers</p>
          </div>
        </div>
      </div>
    );
  }
}
