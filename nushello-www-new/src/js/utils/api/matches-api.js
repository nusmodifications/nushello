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
    return this.get(APIEndPoints.MATCHES_GET_ALL(facebookId));
  }
}

export default new MatchesAPI();
