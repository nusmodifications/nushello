'use strict';
import _ from 'lodash';
import React from 'react';
import cookie from 'react-cookie';

import Chatbox from './chat-box.jsx';
import ChatStore from 'stores/chat-store';
import ChatAction from 'actions/chat-action';
import Permission from 'components/permission/permission.jsx';

let UserPermission = require('constants/user-permission.js');

export default class ChatPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { convoId: '' };

    this.onFetchConvoChange.bind(this);
    this.onNewConvoChange.bind(this);
  }

  componentWillMount() {
    this.unsubscribe = ChatStore.listen((res) => {
      if (res.type === 'permission') {
        this.setState({
          canGo: res.canGo
        });
        ChatAction.init();
        ChatAction.firebaseAuth();
        ChatAction.fetchConvo();
      } else if (res.type === 'messages') {
        this.onGetAllMessages(res.data);
      } else if (res === 'message sent') {
        ChatAction.firebaseGetAll(this.state.convoId);
      } else if (!_.isEmpty(res)) {
        this.onFetchConvoChange(res);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onFetchConvoChange(res) {
    if (!_.isEmpty(res.data)) {
      this.setState({
        convoId: res.data[0].id
      });
      ChatAction.firebaseGetAll(this.state.convoId);
      ChatAction.firebaseListen(this.state.convoId);
    }
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
    if ((typeof this.state.canGo === 'undefined') || (!this.state.canGo)) {
      return (
        <div>
          <Permission permission={UserPermission.EXISTING_USER_ONLY} />
        </div>
      );
    } else {
      return (
        <div>
          <Chatbox messages={this.state.messages} convoId={this.state.convoId} />
        </div>
      );
    }
  }
}
