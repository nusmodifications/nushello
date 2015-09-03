'use strict';
import React from 'react';
import cookie from 'react-cookie';

import Chatbox from './chat-box.jsx';
import ChatStore from 'stores/chat-store';
import ChatAction from 'actions/chat-action';

export default class ChatPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { convoId: '' };

    this.onFetchConvoChange.bind(this);
    this.onNewConvoChange.bind(this);
  }

  componentWillMount() {
    ChatAction.init();
    ChatAction.firebaseAuth();
    ChatAction.fetchConvo();
  }

  componentDidMount() {
    this.unsubscribe = ChatStore.listen((res) => {
      if (res.type === 'messages') {
        this.onGetAllMessages(res.data);
      } else {
        this.onFetchConvoChange(res);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onFetchConvoChange(res) {
    this.setState({
      convoId: res.data[0].id
    });
    ChatAction.firebaseGetAll(this.state.convoId);
    ChatAction.firebaseListen(this.state.convoId);
  }

  onNewConvoChange(res) {
    this.setState({
      convoId: res.data[0].id
    });
    ChatAction.firebaseListen(this.state.convoId);
  }

  onGetAllMessages(data) {
    this.setState({
      messages: data
    });
  }

  render() {
    return (
      <div>
        <Chatbox messages={this.state.messages} convoId={this.state.convoId} />
      </div>
    );
  }
}
