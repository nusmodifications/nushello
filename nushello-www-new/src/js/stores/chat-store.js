'use strict';

import Reflux from 'reflux';
import cookie from 'react-cookie';
import ChatAction from 'actions/chat-action';

let ChatStore = Reflux.createStore({
  listenables: [ChatAction],

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
  }

});

export default ChatStore;

