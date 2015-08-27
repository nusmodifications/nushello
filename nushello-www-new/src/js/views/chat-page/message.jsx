'use strict';
import React from 'react';

// import Avatar from '../../Utils/Avatar'

require('./message.scss');

export default class Message extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="message-wrapper">
        <div className="message-header">{this.props.id % 2 === 0 ? 'Mr. A' : 'Mr. B'}</div>
        <div className="message-body">{this.props.id % 2 === 0 ? 'Hi' : 'Bye'}</div>
      </div>
    );
  }
}
