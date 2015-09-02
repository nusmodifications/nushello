'use strict';

import Reflux from 'reflux';
import ChatAPI from 'utils/api/chat-api';

var ChatAction = Reflux.createActions({
	'init': {asyncResult: true},
	'fetchConvo': {asyncResult: true},
	'newConvo': {asyncResult: true}
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

export default ChatAction;
