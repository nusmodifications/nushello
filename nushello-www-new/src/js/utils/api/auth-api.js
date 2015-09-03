'use strict';

import BaseAPI from './base-api';
import Router from 'react-router';
import cookie from 'react-cookie';

let APIEndPoints = require('constants/api-end-points');
let UserPermission = require('constants/user-permission');
let UserType = require('constants/user-type');

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
    let authAsyncResult;
    let currentUser = cookie.load(this.currentUserKey);
    switch (permission) {
      case UserPermission.ALL:
        authResult = true;
        break;

      case UserPermission.ALL_USER:
        authResult = (typeof currentUser !== 'undefined');
        break;

      case UserPermission.ALL_USER_STRICT:
        if (typeof currentUser === 'undefined') {
          authResult = false;
        } else {
          authAsyncResult = this.get(APIEndPoints.TOKEN_VALIDATE_API(currentUser.userID))
            .then((res)=> {
              if (res.data) {
                authResult = true;
              }
            })
            .catch((error)=> {
              if (error.status === 401) {
              }
            });
        }
        break;

      case UserPermission.NEW_USER_ONLY:
        authResult = (currentUser && (currentUser.type === UserType.NEW_USER));
        break;

      case UserPermission.NEW_USER_ONLY_STRICT:
        if ((typeof currentUser === 'undefined') || (currentUser.type !== UserType.NEW_USER)) {
          authResult = false;
        } else {
          authAsyncResult = this.get(APIEndPoints.TOKEN_VALIDATE_API(currentUser.userID))
            .then((res)=> {
              if (res.data === UserType.NEW_USER) {
                authResult = true;
              } else {
                authResult = false;
              }
            })
            .catch((error)=> {
              if (error.status === 401) {
                authResult = false;
              }
            });
        }
        break;

      case UserPermission.EXISTING_USER_ONLY:
        authResult = (currentUser && (currentUser.type === UserType.EXISTING_USER));
        break;

      case UserPermission.EXISTING_USER_ONLY_STRICT:
        if ((typeof currentUser === 'undefined') || (currentUser.type !== UserType.EXISTING_USER)) {
          authResult = false;
        } else {
          authAsyncResult = this.get(APIEndPoints.TOKEN_VALIDATE_API(currentUser.userID))
            .then((res)=> {
              if (res.data === UserType.EXISTING_USER) {
                authResult = true;
              } else {
                authResult = false;
              }
            })
            .catch((error)=> {
              if (error.status === 401) {
                authResult = false;
              }
            });
        }
        break;

      case UserPermission.YOU_SHALL_NOT_PASS:
        break;

      default:
        break;
    }

    if (typeof authAsyncResult !== 'undefined') {
      return authAsyncResult;
    } else {
      return new Promise(function(resolve, reject) {
        resolve(authResult);
      });
    }
  }
}

export default new AuthAPI();
