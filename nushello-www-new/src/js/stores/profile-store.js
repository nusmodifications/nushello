'use strict';

import Reflux from 'reflux';
import ProfileAction from 'actions/profile-action';

var ProfileStore = Reflux.createStore({
  listenables: [ProfileAction],

  onInit: function(res) {
  },

  onInitCompleted: function(res) {
    this.trigger(res);
  },

  onInitFailed: function(msg) {
    this.trigger(msg);
  }

});

export default ProfileStore;

