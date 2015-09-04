'use strict';

import BaseAPI from './base-api';
import cookie from 'react-cookie';

let APIEndPoints = require('constants/api-end-points');

class ProfileAPI extends BaseAPI {
  constructor() {
    super();
  }

  init() {
    let facebookId = cookie.load(this.currentUserKey).userID;
    return this.get(APIEndPoints.USER_PROFILE_API(facebookId));
  }

  edit(bio) {
    let data = {
      'bio': bio
    };
    return this.editAll(data);
  }

  editAll(data) {
    let facebookId = cookie.load(this.currentUserKey).userID;
    return this.put(APIEndPoints.USER_UPDATE_API(facebookId), data);
  }
}

export default new ProfileAPI();

