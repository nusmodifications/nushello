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
    return this.get(APIEndPoints.CHAT_API_TOKEN(facebookId));
  }

}

export default new ChatAPI();
