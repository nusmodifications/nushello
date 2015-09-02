'use strict';

import Reflux from 'reflux';
import ChatAPI from 'utils/api/chat-api';

var ChatAction = Reflux.createActions({
	'startChat': {asyncResult: true},
	'chatList': {asyncResult: true}
});

ChatAction.startChat.listenAndPromise( function() {
	return ChatAPI.startChat();
});

ChatAction.chatList.listenAndPromise( function() {
	return ChatAPI.chatList();
});

export default ChatAction;
