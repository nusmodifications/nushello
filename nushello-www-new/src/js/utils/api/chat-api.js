'use strict';

import BaseAPI from './base-api';
import cookie from 'react-cookie';

let APIEndPoints = require('constants/api-end-points');

class ChatAPI extends BaseAPI {
  constructor() {
    super();
  }

  init() {
    let facebookId = cookie.load('current_user').userID;
    return this.get(APIEndPoints.CHAT_API_TOKEN(facebookId));
  }

  fetchConvo() {
    let facebookId = cookie.load('current_user').userID;
    return this.get(APIEndPoints.CHAT_API_FETCH(facebookId));
  }

  newConvo(friendId) {
    // Note: friendId is NOT facebookId
    let facebookId = cookie.load('current_user').userID;
    let data = {
      friendId: friendId
    };

    return this.post(APIEndPoints.CHAT_API_NEW(facebookId), data);
  }
}

export default new ChatAPI();
