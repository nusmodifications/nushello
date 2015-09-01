'use strict';

import BaseAPI from './base-api';
import cookie from 'react-cookie';
var APIEndPoints = require('constants/api-end-points');

class MatchesAPI extends BaseAPI {
  constructor() {
    super();
  }

  init() {
    let facebookId = cookie.load('current_user').userID;
    let user = this.get(APIEndPoints.USER_PROFILE_API(facebookId));
    return this.get(APIEndPoints.MATCHES_API(user.facebookId, user.userId));
  }
}

export default new MatchesAPI();
