'use strict';

import Reflux from 'reflux';
import cookie from 'react-cookie';
import ChatAction from 'actions/chat-action';
import PermissionStore from 'stores/permission-store';
import FirebaseAPI from 'utils/api/firebase-api';

let ChatStore = Reflux.createStore({
  listenables: [ChatAction],

  init: function() {
    this.listenTo(PermissionStore, this.updatePermission);
  },

  // Async listeners for init -- ChatAction
  onInitCompleted: function(res) {
    let authToken = res.data.firebaseToken;
    cookie.save('firebaseAuthToken', authToken);
    this.trigger({
      action: 'init'
    });
  },

  onInitFailed: function(msg) {
    console.log(msg);
  },

  // Async listeners for getAllConversations -- ChatAction
  onGetAllConversationsCompleted: function(res) {
    this.trigger({
      action: 'getAllConversations',
      data: res
    });
  },

  onGetAllConversationsFailed: function(msg) {
    console.log(msg);
  },

  // Async listeners for createNewConversation -- ChatAction
  onCreateNewConversationCompleted: function(res) {
    this.trigger({
      action: 'createNewConversation',
      convoId: 0, // TODO: add in convoId for new conversation
      data: res
    });
  },

  onCreateNewConversationFailed: function(res) {
    console.log(res);
  },

  // Async listeners for authenticateFirebase -- ChatAction
  onAuthenticateFirebaseCompleted: function(res) {
    this.trigger({
      action: 'authenticateFirebase'
    });
  },

  // Async listeners for getAllMessages -- ChatAction
  onGetAllMessagesCompleted: function(res) {
    this.trigger({
      action: 'getAllMessages',
      data: res
    });
  },

  onGetAllMessagesFailed: function(msg) {
    console.log(msg);
  },

  onSendMessage: function(convoId, text) {
    FirebaseAPI.sendMessage(convoId, text);
  },

  updatePermission: function(res) {
    if (res.canGo) {
      this.trigger({
        action: 'updatePermission',
        canGo: res.canGo
      });
    }
  }
});

export default ChatStore;

