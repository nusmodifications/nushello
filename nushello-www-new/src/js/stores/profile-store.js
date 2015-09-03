'use strict';

import Reflux from 'reflux';
import cookie from 'react-cookie';
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
  },

  onEdit: function(res) {

  },

  onEditCompleted: function(res) {
    this.trigger(res);
  },

  onEditFailed: function(res) {
    this.trigger(res);
  }

});

export default ProfileStore;

