'use strict';

import BaseAPI from './base-api';

class AuthAPI extends BaseAPI {
  constructor() {
    super();
    this.model = 'auth';
  }

  init() {
    // var authenticate = this.get('/me');
    var authenticate = this.ajaxFake(require('json!../../mocks/auth/me'), 1500);
    authenticate
      .then((res)=> {
        if (res.user) {
          localStorage.setItem(this.currentUserKey, JSON.stringify(res.user));
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
    return authenticate;
  }

  register() {
  }

  login() {
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
