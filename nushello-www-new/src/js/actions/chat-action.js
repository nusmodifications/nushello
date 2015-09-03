'use strict';

import Reflux from 'reflux';
import ChatAPI from 'utils/api/chat-api';
import FirebaseAPI from 'utils/api/firebase-api';

var ChatAction = Reflux.createActions({
	'init': {asyncResult: true},
	'fetchConvo': {asyncResult: true},
	'newConvo': {asyncResult: true},
	'firebaseAuth': {asyncResult: false},
	'firebaseListen': {asyncResult: false},
	'firebaseGetAll': {asyncResult: true},
	'firebaseSendMessage': {asyncResult: false}
});

ChatAction.init.listenAndPromise(function() {
	return ChatAPI.init();
});

ChatAction.fetchConvo.listenAndPromise(function() {
  return ChatAPI.fetchConvo();
});

// Creates a new conversation with another user of userId
ChatAction.newConvo.listenAndPromise(function(userId) {
  return ChatAPI.newConvo(userId);
});

ChatAction.firebaseAuth = FirebaseAPI.firebaseAuth;

// Listens for new messages
ChatAction.firebaseListen = FirebaseAPI.firebaseListen;

ChatAction.firebaseGetAll.listenAndPromise(FirebaseAPI.firebaseGetAll);

ChatAction.firebaseSendMessage = FirebaseAPI.firebaseSendMessage;

export default ChatAction;

