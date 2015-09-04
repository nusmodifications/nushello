'use strict';

import Reflux from 'reflux';
import ChatAPI from 'utils/api/chat-api';
import FirebaseAPI from 'utils/api/firebase-api';

var ChatAction = Reflux.createActions({
	'init': {asyncResult: true},
	'getAllConversations': {asyncResult: true},
	'createNewConversation': {asyncResult: true},
	'getAllMessages': {asyncResult: true},
	'listenToChatUpdates': {asyncResult: true}
});

ChatAction.init.listenAndPromise(ChatAPI.init);
ChatAction.getAllConversations.listenAndPromise(ChatAPI.getAllConversations);
ChatAction.createNewConversation.listenAndPromise(ChatAPI.createNewConversation);
ChatAction.getAllMessages.listenAndPromise(FirebaseAPI.getAllMessages);
ChatAction.listenToChatUpdates.listenAndPromise(FirebaseAPI.listen);

export default ChatAction;

