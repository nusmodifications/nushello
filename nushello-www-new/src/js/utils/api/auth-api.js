'use strict';

import BaseAPI from './base-api';
import ProfileAPI from './profile-api';
import cookie from 'react-cookie';

let APIEndPoints = require('constants/api-end-points');
let UserPermission = require('constants/user-permission');

class AuthAPI extends BaseAPI {
  constructor() {
    super();
  }

  init() {
    let authenticate;
    let currentUser = cookie.load(this.currentUserKey);
    if (!currentUser) {
      currentUser = {};
    }

    authenticate = new Promise(function (resolve, reject) {
      resolve(currentUser);
    });

    authenticate
      .then((res)=> {
      })
      .catch((error)=> {
        if (error.status === 401) {
          if ('API_HOST'['API_HOST'.length - 1] === '/') {
            window.location.href = 'API_HOST';
          } else {
            window.location.href = 'API_HOST/';
          }
        }
      });
    return authenticate;
  }

  register() {
  }

  login(userInfo) {
    let login = this.get(APIEndPoints.FACEBOOK_AUTH_API(userInfo.userID, userInfo.facebookToken));

    login
      .then((res)=> {
        if (res.data) {
          const { type, data } = res;
          let currentUser = { type, ...data };
          cookie.save(this.currentUserKey, JSON.stringify({ ...currentUser, ...userInfo }));

          // Get id from API
          ProfileAPI.init()
            .then((res) => {
              cookie.save(this.currentUserKey, JSON.stringify({ ...currentUser, ...userInfo, id: res.data.id }));
            });
        }
      })
      .catch((error)=> {
        if (error.status === 401) {
          if ('API_HOST'['API_HOST'.length - 1] === '/') {
            window.location.href = 'API_HOST';
          } else {
            window.location.href = 'API_HOST/';
          }
        }
      });
    return login;
  }

  authenticate(permission) {
    let authResult = false;
    let currentUser = cookie.load(this.currentUserKey);
    switch (permission) {
      case UserPermission.ALL:
        authResult = true;
        break;

      case UserPermission.ALL_USER:
        authResult = (typeof currentUser !== 'undefined');
        break;

      case UserPermission.ALL_USER_STRICT:
        authResult = true;
        break;

      case UserPermission.NEW_USER_ONLY:
        authResult = (currentUser && (currentUser.type === 'new_user'));
        break;

      case UserPermission.NEW_USER_ONLY_STRICT:
        authResult = true;
        break;

      case UserPermission.EXISTING_USER_ONLY:
        authResult = (currentUser && (currentUser.type === 'existing_user'));
        break;

      case UserPermission.EXISTING_USER_ONLY_STRICT:
        authResult = true;
        break;

      case UserPermission.YOU_SHALL_NOT_PASS:
        break;

      default:
        break;
    }

    return authResult;
  }
}

export default new AuthAPI();
