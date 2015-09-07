'use strict';
import _ from 'lodash';
import React from 'react';
import cookie from 'react-cookie';

import Message from './message.jsx';

export default class Messages extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  shouldComponentUpdate() {
    // Scrolls new message to the bottom
    let node = React.findDOMNode(this);
    setTimeout(() => {
      node.scrollTop = node.scrollHeight;
    }, 0);
    return true;
  }

  render() {
    let currUserId = cookie.load('current_user').id.toString();
    let messageItems = _.map(this.props.messages, (message, index) => {
      let messageHeader = 'Me';
      if (message.user_id !== currUserId) {
        messageHeader = this.props.friendName;
      }
      return <Message key={index} header={messageHeader} body={message.content}/>;
    });

    return (
      <div className="messages">
        {messageItems}
      </div>
    );
  }
}

