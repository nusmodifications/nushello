'use strict';

import BaseAPI from './base-api';
import cookie from 'react-cookie';

let APIEndPoints = require('constants/api-end-points');

class ChatAPI extends BaseAPI {
  constructor() {
    super();
  }

  init() {
    let facebookId = cookie.load('current_user').userID;
    let request = this.get(APIEndPoints.CHAT_API_TOKEN(facebookId));
    request.then((res)=> {
      cookie.save('firebaseAuthToken', res.data.firebaseToken);
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

    return request;
  }

  getAllConversations() {
    let facebookId = cookie.load('current_user').userID;
    let request = this.get(APIEndPoints.CHAT_API_FETCH(facebookId));
    request.then((res)=> {
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

    return request;
  }

  createNewConversation(friendId) {
    // Note: friendId is NOT facebookId
    let facebookId = cookie.load('current_user').userID;
    let data = {
      friendId: friendId
    };

    let request = this.post(APIEndPoints.CHAT_API_NEW(facebookId), data);
    request.then((res)=> {
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

    return request;
  }
}

export default new ChatAPI();
