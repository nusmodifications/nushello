'use strict';
import React from 'react';

// import Avatar from '../../Utils/Avatar'

export default class Message extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="message-wrapper">
        <div className="message-header"></div>
        <div className="message-body"></div>
      </div>
    );
  }
}
