'use strict';

import Reflux from 'reflux';
import ChatAPI from 'utils/api/chat-api';

var ChatAction = Reflux.createActions({
	'init': {asyncResult: true}
});

ChatAction.init.listenAndPromise(function() {
	return ChatAPI.init();
});

export default ChatAction;
