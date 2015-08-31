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

  startConvo() {
    // var convo = this.get(APIEndPoints.CHAT_API(userInfo.userID, otherUserInfo.userID));
  }
}