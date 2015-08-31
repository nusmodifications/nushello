'use strict';

import React from 'react';
import Reflux from 'reflux';

import ChatAction from 'actions/chat-action';
import ChatStore from 'stores/chat-store';

var StartConvo = React.createClass({
  mixins: [Reflux.connect(ChatStore)],

  handleClick: function() {
    ChatAction.startConvo();
  },

  render: function() {
    return (
      <button className="btn btn-primary btn-sm" onClick={this.handleClick}>Start chatting with {this.props.name}</button>
    );
  }
});

module.exports = StartConvo;
