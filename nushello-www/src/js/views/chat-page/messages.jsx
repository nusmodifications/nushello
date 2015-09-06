'use strict';
import _ from 'lodash';
import React from 'react';

import Message from './message.jsx';

export default class Messages extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {
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
    let messageItems = _.map(this.props.messages, (message, index) => {
      return <Message key={index} body={message.content}/>;
    });

    return (
      <div className="messages">
        {messageItems}
      </div>
    );
  }
}

