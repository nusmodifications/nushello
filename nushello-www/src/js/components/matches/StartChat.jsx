'use strict';

import React from 'react';
import Reflux from 'reflux';
import Router from 'react-router';

import ChatAction from 'actions/chat-action';
import ChatStore from 'stores/chat-store';

var StartChat = React.createClass({
  mixins: [Reflux.connect(ChatStore), Router.Navigation],

  handleClick: function() {
    ChatAction.newConvo(this.props.userId);
    this.transitionTo('chat');
  },

  render: function() {
    return (
      <button className="btn btn-primary btn-sm" onClick={this.handleClick}>Chat with {this.props.name}</button>
    );
  }
});

module.exports = StartChat;
