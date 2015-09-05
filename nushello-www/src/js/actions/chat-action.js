'use strict';

import Reflux from 'reflux';
import ChatAPI from 'utils/api/chat-api';
import FirebaseAPI from 'utils/api/firebase-api';

var ChatAction = Reflux.createActions({
	'init': {asyncResult: true},
	'getAllConversations': {asyncResult: true},
	'createNewConversation': {asyncResult: true},
	'authenticateFirebase': {asyncResult: true},
	'getAllMessages': {asyncResult: true},
	'sendMessage': {asyncResult: false}
});

ChatAction.init.listenAndPromise(() => {
  return ChatAPI.init();
});

ChatAction.getAllConversations.listenAndPromise(() => {
  return ChatAPI.getAllConversations();
});

ChatAction.createNewConversation.listenAndPromise((friendId) => {
  return ChatAPI.createNewConversation(friendId);
});

ChatAction.authenticateFirebase.listenAndPromise(() => {
  return FirebaseAPI.auth();
});

ChatAction.getAllMessages.listenAndPromise((convoId) => {
  return FirebaseAPI.getAllMessages(convoId);
});

export default ChatAction;

