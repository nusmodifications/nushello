'use strict';

import BaseAPI from './base-api';
let APIEndPoints = require('constants/api-end-points');

class ProfileAPI extends BaseAPI {
  constructor() {
    super();
  }

  init() {
    let profile = this.ajaxFake(require('json!../../mocks/profile/me'), 1500);

    profile
      .catch((error)=> {
        if (error.status === 401) {
          if ('API_HOST'['API_HOST'.length - 1] === '/') {
            window.location.href = 'API_HOST?path=' + encodeURIComponent(window.location.pathname);
          } else {
            window.location.href = 'API_HOST/?path=' + encodeURIComponent(window.location.pathname);
          }
        }
      });

    return profile;
  }
}

export default new ProfileAPI();
