'use strict';
import React from 'react';

import ChatAction from 'actions/chat-action';
import ChatStore from 'stores/chat-store';

const ENTER_KEY_CODE = 13;

export default class MessageComposer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { text: '' };
  }

  componentDidMount() {
    this.unsubscribe = ChatStore.listen((res) => {
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <input className="form-control" id="messageField" name="messageField" autoFocus={true}
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
        ChatAction.sendMessage(this.props.convoId, text);
      }
      this.setState({text: ''});
    }
  }
}
