'use strict';

import Reflux from 'reflux';
import cookie from 'react-cookie';
import Firebase from 'firebase';
import ChatAction from 'actions/chat-action';

let ChatStore = Reflux.createStore({
  listenables: [ChatAction],

  onInit: function(res) {},

  onInitCompleted: function(res) {
    let firebase = new Firebase('https://nushello.firebaseio.com/conversations');
    let authToken = res.data.firebaseToken;

    let token = '';
    firebase.authWithCustomToken(authToken, function(err, authData) {
      if (err) {
        console.log('Firebase auth failed. Please contact developer.');
      } else {
        token = authData.token;
        cookie.save('firebaseToken', token);
      }
    });

  },

  onInitFailed: function(msg) {
    console.log(msg);
  }

});

export default ChatStore;
