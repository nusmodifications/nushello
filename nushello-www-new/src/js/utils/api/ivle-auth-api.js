'use strict';

import BaseAPI from './base-api';
import cookie from 'react-cookie';
var APIEndPoints = require('constants/api-end-points');

class IvleAuthAPI extends BaseAPI {
  constructor() {
    super();
  }

  auth(nusnetId, ivleToken) {
    var currentUser = cookie.load(this.currentUserKey);
    var ivleData = {
      nusnetId: nusnetId,
      ivleToken: ivleToken
    };
    console.log(currentUser);
    console.log(ivleData);
    console.log(APIEndPoints.IVLE_AUTH_API(currentUser.userID));

    var authentication = this.put(APIEndPoints.IVLE_AUTH_API(currentUser.userID), ivleData);

    authentication
      .then((res)=> {
        if (res.type === 'ivleAuthenticated') {
          currentUser.type = 'existingUser';
          cookie.save(this.currentUserKey, currentUser);
          console.log(cookie.load(this.currentUserKey));
        }
      })
      .catch((error)=> {
        console.log(error);
        if (error.status === 401) {
          if ('API_HOST'['API_HOST'.length - 1] === '/') {
            window.location.href = 'API_HOST?path=' + encodeURIComponent(window.location.pathname);
          } else {
            window.location.href = 'API_HOST/?path=' + encodeURIComponent(window.location.pathname);
          }
        }
      });
    return authentication;
  }
}

export default new IvleAuthAPI();
