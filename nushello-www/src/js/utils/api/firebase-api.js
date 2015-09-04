'use strict';

import Firebase from 'firebase';

import BaseAPI from './base-api';
import cookie from 'react-cookie';

let APIEndPoints = require('constants/api-end-points');
let firebase = new Firebase('https://nushello.firebaseio.com/conversations');

class FirebaseAPI extends BaseAPI {
  constructor() {
    super();
  }

  auth() {
    let authToken = cookie.load('firebaseAuthToken');
    let token = '';
    firebase.authWithCustomToken(authToken, (err, authData) => {
      if (err) {
        console.log('Firebase auth failed. Please contact developer.');
      } else {
        token = authData.token;
        cookie.save('firebaseToken', token);
      }
    });
  }

  listen(convoId) {
    let firebaseChild = firebase.child(`${convoId}/messages`);
    let userId = cookie.load('current_user').id.toString();

    return new Promise((fulfill, reject) => {
      firebaseChild.on('child_added', fulfill, reject);
      console.log('Firebase server listening...');
    });
  }

  getAllMessages(convoId) {
    let firebaseChild = firebase.child(`${convoId}/messages`);
    let userId = cookie.load('current_user').id.toString();

    return new Promise((fulfill, reject) => {
      firebaseChild.once('value', fulfill, reject);
    });
  }

  sendMessage(convoId, content) {
    let firebaseChild = firebase.child(`${convoId}/messages`);
    let userId = cookie.load('current_user').id.toString();

    firebaseChild.push({
      user_id: userId,
      content: content,
      read: false
    });
  }

  setRead(convoId, messageId) {
    let firebaseChild = firebase.child(`${convoId}/messages`);
    firebaseChild.child(messageId).update({
      read: true
    });
  }
}

export default new FirebaseAPI();

