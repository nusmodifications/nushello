'use strict';

import BaseAPI from './base-api';
import cookie from 'react-cookie';
var APIEndPoints = require('constants/api-end-points');

class AuthAPI extends BaseAPI {
  constructor() {
    super();
  }

  init() {
    // var authenticate = this.get('/me');
    // var authenticate = this.ajaxFake(require('json!../../mocks/auth/me'), 1500);
    var authenticate = this.ajaxFake(cookie.load(this.currentUserKey));
    authenticate
      .then((res)=> {
        // if (res.user) {
        //   localStorage.setItem(this.currentUserKey, JSON.stringify(res.user));
        // }
      })
      .catch((error)=> {
        if (error.status === 401) {
          if ('API_HOST'['API_HOST'.length - 1] === '/') {
            window.location.href = 'API_HOST?path=' + encodeURIComponent(window.location.pathname);
          } else {
            window.location.href = 'API_HOST/?path=' + encodeURIComponent(window.location.pathname);
          }
        }
      });
    return authenticate;
  }

  register() {
  }

  login(userInfo) {
    var login = this.get(APIEndPoints.FACEBOOK_AUTH_API(userInfo.userID, userInfo.facebookToken));

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
            window.location.href = 'API_HOST?path=' + encodeURIComponent(window.location.pathname);
          } else {
            window.location.href = 'API_HOST/?path=' + encodeURIComponent(window.location.pathname);
          }
        }
      });
    return login;
  }

  logout() {
    var logout = this.del('/logout');
    logout.then((res)=> {
      localStorage.removeItem(this.currentUserKey);
      if ('API_HOST'['API_HOST'.length - 1] === '/') {
        window.location.href = 'API_HOST';
      } else {
        window.location.href = 'API_HOST/';
      }
    });
    return logout;
  }
}

export default new AuthAPI();
