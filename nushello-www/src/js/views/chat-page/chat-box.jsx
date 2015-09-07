'use strict';
import React from 'react';

import ConvoControls from './convo-controls.jsx';
import Messages from './messages.jsx';

export default class Chatbox extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="chat-wrapper">
        <div className="chatbox">
          <Messages friendName={this.props.friendName} messages={this.props.messages} convoId={this.props.convoId} />
          <div className="input">
          <ConvoControls convoId={this.props.convoId} />
          </div>
        </div>
      </div>
    );
  }
}
