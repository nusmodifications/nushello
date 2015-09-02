'use strict';
import React from 'react';
import cookie from 'react-cookie';

import Chatbox from './chat-box.jsx';
import ChatStore from 'stores/chat-store';
import ChatAction from 'actions/chat-action';

export default class ChatPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    ChatAction.init();
  }

  componentDidMount() {
    ChatAction.fetchConvo();
    this.unsubscribe = ChatStore.listen(this.onInitChange.bind(this), ChatStore.oninitCompleted);
    this.unsubscribe = ChatStore.listen(this.onFetchConvoChange.bind(this), ChatStore.onFetchConvoCompleted);
    this.unsubscribe = ChatStore.listen(this.onNewConvoChange.bind(this), ChatStore.onNewConvoCompleted);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onInitChange(res) {
    this.setState({
      data: res
    });
  }

  onFetchConvoChange(res) {
  }

  onNewConvoChange(res) {
  }

  render() {
    return (
      <div>
        <Chatbox />
      </div>
    );
  }
}
