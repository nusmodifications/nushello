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
    this.unsubscribe = ChatStore.listen(this.onStatusChange.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(res) {
    this.setState({
      data: res
    });
  }

  render() {
    return (
      <div>
        <Chatbox />
      </div>
    );
  }
}
