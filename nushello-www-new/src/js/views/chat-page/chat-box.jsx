'use strict';
import React from 'react';

import ConvoControls from './convo-controls.jsx';
import Messages from './messages.jsx';

require('./chat-box.scss');

export default class Chatbox extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="chat-wrapper">
        <div className="chatbox">
          <Messages />
          <div className="input">
          <ConvoControls />
          </div>
        </div>
      </div>
    );
  }
}
