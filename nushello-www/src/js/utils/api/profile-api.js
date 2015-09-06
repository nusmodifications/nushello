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
    let req = this.get(APIEndPoints.USER_PROFILE_API(facebookId));
    req
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

  edit(bio) {
    let data = {
      'bio': bio
    };
    return this.editAll(data);
  }

  editAll(data) {
    let facebookId = cookie.load(this.currentUserKey).userID;
    let req = this.put(APIEndPoints.USER_UPDATE_API(facebookId), data);
    req.then((res)=> {
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

export default new ProfileAPI();

