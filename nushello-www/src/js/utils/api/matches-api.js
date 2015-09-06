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
    let req = this.get(APIEndPoints.MATCHES_GET_ALL(facebookId))
      .then((res)=> {
      })
      .catch((error)=> {
        if (error.status === 401) {
          this.clean();
          if ('API_HOST'['API_HOST'.length - 1] === '/') {
            window.location.href = 'API_HOST';
          } else {
            window.location.href = 'API_HOST/';
          }
        }
      });

    return req;
  }
}

export default new MatchesAPI();
