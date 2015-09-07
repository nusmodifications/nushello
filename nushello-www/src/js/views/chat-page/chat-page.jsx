'use strict';
import _ from 'lodash';
import React from 'react';
import cookie from 'react-cookie';
import Firebase from 'firebase';

import Chatbox from './chat-box.jsx';
import ChatStore from 'stores/chat-store';
import ChatAction from 'actions/chat-action';
import Permission from 'components/permission/permission.jsx';

let UserPermission = require('constants/user-permission.js');

export default class ChatPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentWillMount() {
    ChatAction.init();
  }

  componentDidMount() {
    this.unsubscribe = ChatStore.listen((res) => {
      let convoId = -1;

      switch(res.action) {
        case 'init':
          this._initComplete();
          break;
        case 'getAllConversations':
          this._setConversationId(res.data);
          break;
        case 'createNewConversation':
          this._setConversationId(res.data, res.data.data.id);
          break;
        case 'authenticateFirebase':
          ChatAction.getAllConversations();
          break;
        case 'getAllMessages':
          this._updateMessages(res.data.val());
          break;
        case 'updatePermission':
          this._setPermission(res);
          break;
        case 'changeChat':
          this._changeChat(res.data);
          break;
        default:
          break;
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
          <Chatbox friendName={this.state.friendName} messages={this.state.messages} convoId={this.state.convoId} />
        </div>
      );
    }
  }

  _initComplete() {
    ChatAction.authenticateFirebase();
  }

  _setConversationId(res, convoId) {
    if (convoId === undefined ) {
      convoId = res.data[0].id;
    }
    this.setState({
      convoId: convoId,
      friendName: res.data[convoId].friend.fakeName
    });
    ChatAction.getAllMessages(this.state.convoId);
  }

  _updateMessages(data) {
    this.setState({
      messages: data
    });

    // Firebase listener
    let firebase = new Firebase('https://nushello.firebaseio.com/conversations');
    let firebaseChild = firebase.child(this.state.convoId + '/messages');
    let userId = cookie.load('current_user').id.toString();

    firebaseChild.on('value', (res) => {
      this.setState({
        messages: res.val()
      });
    });
    console.log('Firebase server listening...');
  }

  _changeChat(data) {
    this.setState({
      convoId: data.id,
      friendName: data.friend.fakeName
    });
    ChatAction.getAllMessages(data.id);
  }

  _setPermission(data) {
    this.setState({
      canGo: data.canGo
    });
  }
}
