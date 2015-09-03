'use strict';
import React from 'react';

import Message from './message.jsx';
import ChatAction from 'actions/chat-action';
import ChatStore from 'stores/chat-store';

export default class Messages extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    // Scrolls new message to the bottom
    let node = React.findDOMNode(this);
    setTimeout(() => {
      node.scrollTop = node.scrollHeight;
    }, 0);
  }

  render() {
    return (
      <div className="messages">
      </div>
    );
  }
}

