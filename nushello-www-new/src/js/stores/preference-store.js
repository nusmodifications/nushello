'use strict';

import Reflux from 'reflux';
import cookie from 'react-cookie';
import PreferenceAction from 'actions/preference-action';
import PermissionStore from 'stores/permission-store';

var PreferenceStore = Reflux.createStore({
  listenables: [PreferenceAction],

  init: function() {
    this.listenTo(PermissionStore, this.updatePermission);
  },

  onInit: function(res) {
  },

  onInitCompleted: function(res) {
    if (res.type === 'userProfile') {
      this.trigger({
        profile: res.data
      });
    }
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

export default PreferenceStore;

