'use strict';

import Reflux from 'reflux';
import ChatAPI from 'utils/api/chat-api';
import FirebaseAPI from 'utils/api/firebase-api';

var ChatAction = Reflux.createActions({
	'init': {asyncResult: true},
	'fetchConvo': {asyncResult: true},
	'newConvo': {asyncResult: true},
	'refreshMessages': {asyncResult: false},
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

// Listens for new messages
ChatAction.firebaseGetAll.listenAndPromise(FirebaseAPI.firebaseGetAll);


export default ChatAction;

