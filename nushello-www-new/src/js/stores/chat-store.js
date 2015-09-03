'use strict';

import Reflux from 'reflux';
import cookie from 'react-cookie';
import ChatAction from 'actions/chat-action';
import PermissionStore from 'stores/permission-store';

let ChatStore = Reflux.createStore({
  listenables: [ChatAction],

  init: function() {
    this.listenTo(PermissionStore, this.updatePermission);
  },

  onInitCompleted: function(res) {
    let authToken = res.data.firebaseToken;
    cookie.save('firebaseAuthToken', authToken);
  },

  onInitFailed: function(msg) {
    console.log(msg);
  },

  onFetchConvoCompleted: function(res) {
    this.trigger(res);
  },

  onFetchConvoFailed: function(msg) {
    console.log(msg);
  },

  onNewConvoCompleted: function(res) {
    this.trigger(res);
  },

  onNewConvoFailed: function(msg) {
    console.log(msg);
  },

  onFirebaseListenCompleted: function(res) {
    this.trigger(res);
  },

  onFirebaseGetAllCompleted: function(res) {
    this.trigger({
      type: 'messages',
      data: res.val()
    });
  },

  onFirebaseSendMessageCompleted: function() {
    this.trigger('message sent');
  },

  onFirebaseSetReadCompleted: function() {
    this.trigger('message read');
  },

  updatePermission: function(res) {
    if (res.canGo) {
      this.trigger({
        type: 'permission',
        canGo: res.canGo
      });
    }
  }

});

export default ChatStore;

