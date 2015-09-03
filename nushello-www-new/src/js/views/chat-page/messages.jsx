'use strict';
import _ from 'lodash';
import React from 'react';

import Message from './message.jsx';
import ChatAction from 'actions/chat-action';
import ChatStore from 'stores/chat-store';

export default class Messages extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {
    // Scrolls new message to the bottom
    let node = React.findDOMNode(this);
    setTimeout(() => {
      node.scrollTop = node.scrollHeight;
    }, 0);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ messages: nextProps.messages });
  }

  render() {
    let messageItems = _.map(this.state.messages, (message) => {
      return <Message body={message.content}/>;
    });

    return (
      <div className="messages">
        {messageItems}
      </div>
    );
  }
}

