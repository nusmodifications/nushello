'use strict';

import Reflux from 'reflux';
import cookie from 'react-cookie';
import ProfileAction from 'actions/profile-action';
import PermissionStore from 'stores/permission-store';

var ProfileStore = Reflux.createStore({
  listenables: [ProfileAction],

  init: function() {
    this.listenTo(PermissionStore, this.updatePermission);
  },

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
  },

  updatePermission: function(res) {
    if (res.canGo) {
      this.trigger({
        canGo: res.canGo
      });
    }
  }

});

export default ProfileStore;

