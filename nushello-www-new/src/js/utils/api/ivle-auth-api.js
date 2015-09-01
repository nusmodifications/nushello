'use strict';

import BaseAPI from './base-api';
import cookie from 'react-cookie';
var APIEndPoints = require('constants/api-end-points');

class IvleAuthAPI extends BaseAPI {
  constructor() {
    super();
  }

  auth(ivleToken) {
    var currentUser = cookie.load(this.currentUserKey);
    console.log(currentUser);
    // var login = this.get(APIEndPoints.FACEBOOK_AUTH_API(userInfo.userID, userInfo.facebookToken));

    // login
    //   .then((res)=> {
    //     if (res.data) {
    //       const { type, data } = res;
    //       let currentUser = { type, ...data };
    //       cookie.save(this.currentUserKey, JSON.stringify({ ...currentUser, ...userInfo }));
    //     }
    //   })
    //   .catch((error)=> {
    //     if (error.status === 401) {
    //       if ('API_HOST'['API_HOST'.length - 1] === '/') {
    //         window.location.href = 'API_HOST?path=' + encodeURIComponent(window.location.pathname);
    //       } else {
    //         window.location.href = 'API_HOST/?path=' + encodeURIComponent(window.location.pathname);
    //       }
    //     }
    //   });
    // return login;
  }
}

export default new IvleAuthAPI();
