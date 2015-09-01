'use strict';

import BaseAPI from './base-api';
import cookie from 'react-cookie';

var APIEndPoints = require('constants/api-end-points');

class ChatAPI extends BaseAPI {
  constructor() {
    super();
  }

  init() {
    let facebookId = cookie.load('current_user').userID;
    return this.get(APIEndPoints.USER_PROFILE_API(facebookId));
  }

  startChat() {
    // var convo = this.post(APIEndPoints.START_CHAT_API(userInfo.userID, otherUserInfo.userID));
  }

  chatList() {
    // var list = this.get(APIEndPoints.CHAT_LIST_API(userInfo.userID))
  }
}
