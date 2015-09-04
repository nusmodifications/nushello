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
    this.state = {};

    this._updateConversations.bind(this);
    this._updateMessages.bind(this);
    this._setPermission.bind(this);
  }

  componentWillMount() {
    ChatAction.init();
    ChatAction.getAllConversations();
  }

  componentDidMount() {
    this.unsubscribe = ChatStore.listen((res) => {
      switch(res.action) {
        case 'getAllConversations':
        case 'createNewConversation':
          this._updateConversations(res.data);
          break;
        case 'getAllMessages':
        case 'listenToChatUpdates':
          this._updateMessages(res.data);
          break;
        case 'updatePermission':
          this._setPermission(res);
          break;
        default:
          console.log('Invalid action declaration');
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
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

  _updateConversations(data) {
    console.log('_updateConversations', data);
  }

  _updateMessages(data) {
    console.log('_updateMessages', data);
  }

  _setPermission(data) {
    this.setState({
      canGo: data.canGo
    });
  }
}
