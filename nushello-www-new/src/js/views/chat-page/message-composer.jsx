'use strict';
import React from 'react';

import ChatAction from 'actions/chat-action';

const ENTER_KEY_CODE = 13;

export default class MessageComposer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { text: '' };
  }

  render() {
    return (
      <textarea id="messageField" name="messageField" autoFocus={true}
        value={this.state.text} onChange={this._onChange} onKeyDown={this._onKeyDown} />
    );
  }

  _onChange = (e) => {
    this.setState({ text: e.target.value });
  }

  _onKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      e.preventDefault();
      var text = this.state.text.trim();
      if (text) {
        console.log('Found entered text' + text);
        ChatAction.firebaseSendMessage(this.props.convoId, text);
      }
      this.setState({text: ''});
    }
  }
}
