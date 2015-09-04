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

  firebaseAuth() {
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

  firebaseListen(convoId) {
    let firebaseChild = firebase.child(`${convoId}/messages`);
    let userId = cookie.load('current_user').id.toString();

    firebaseChild.on('child_added', (snapshot) => {
      if (snapshot.val().user_id === userId) {
        return {
          owner: 'self',
          content: snapshot.val().content
        };
      } else {
        return {
          owner: 'opp',
          content: snapshot.val().content
        };
      }
    }, (err) => {
      console.log(err);
    });

    console.log('Firebase server listening...');
  }

  firebaseGetAll(convoId) {
    let firebaseChild = firebase.child(`${convoId}/messages`);
    let userId = cookie.load('current_user').id.toString();

    return new Promise((fulfill, reject) => {
      firebaseChild.once('value', fulfill, reject);
    });
  }

  firebaseSendMessage(convoId, content) {
    let firebaseChild = firebase.child(`${convoId}/messages`);
    let userId = cookie.load('current_user').id.toString();

    firebaseChild.push({
      user_id: userId,
      content: content,
      read: false
    });
  }

  firebaseSetRead(convoId, messageId) {
    let firebaseChild = firebase.child(`${convoId}/messages`);
    firebaseChild.child(messageId).update({
      read: true
    });
  }
}

export default new FirebaseAPI();

