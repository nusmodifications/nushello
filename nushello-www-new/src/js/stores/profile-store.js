'use strict';

import _ from 'lodash';
import Reflux from 'reflux';
import ProfileAction from 'actions/profile-action';

var currentUser = null;

var ProfileStore = Reflux.createStore({
  listenables: ProfileAction,

  getCurrentUser: function() {
    return currentUser;
  },

  onInitCompleted: function(res) {
    if (res) {
      currentUser = res;
    }

    this.trigger({
      currentUser: currentUser
    });
  },

  onInitFailed: function(res) {
    this.trigger(res);
  }
});

export default ProfileStore;

