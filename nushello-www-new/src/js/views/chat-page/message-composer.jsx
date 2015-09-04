'use strict';
import React from 'react';

import ChatAction from 'actions/chat-action';
import ChatStore from 'stores/chat-store';

const ENTER_KEY_CODE = 13;

export default class MessageComposer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { text: '' };
    this.onMessageSent.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = ChatStore.listen((res) => {
      if (res === 'message sent') {
        this.onMessageSent();
      }
    });

  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onMessageSent() {
    ChatAction.refreshMessages();
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
        ChatAction.firebaseSendMessage(this.props.convoId, text);
      }
      this.setState({text: ''});
    }
  }
}
