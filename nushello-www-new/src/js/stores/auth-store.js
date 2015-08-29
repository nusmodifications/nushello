'use strict';

import _ from 'lodash';
import Reflux from 'reflux';
import AuthAction from 'actions/auth-action';

var currentUser = null;

var AuthStore = Reflux.createStore({
  listenables: AuthAction,

  getCurrentUser: function() {
    return currentUser;
  },

  onInitCompleted: function(response) {
    if (response) {
      currentUser = response;

      this.trigger({
        currentUser: currentUser
      });
    }
  },

  onInitFailed: function(response) {
    this.trigger(response);
  },

  onLogin: function(response) {
    let facebookID = response.userID;
    currentUser = {
      facebookID
    };
    this.trigger({
      currentUser: currentUser
    });
  },

  onLoginCompleted: function(response) {
    const { type, data } = response;
    let accessToken = data.accessToken;
    currentUser = {
      ...currentUser,
      type,
      accessToken
    };
    this.trigger({
      currentUser: currentUser
    });
  },

  onLoginFailed: function() {
    currentUser = null;
    this.trigger({
      currentUser: currentUser
    });
  }

});

export default AuthStore;
