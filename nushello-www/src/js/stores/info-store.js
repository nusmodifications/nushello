'use strict';

import Reflux from 'reflux';
import cookie from 'react-cookie';
import InfoAction from 'actions/info-action';
import PermissionStore from 'stores/permission-store';

var InfoStore = Reflux.createStore({
  listenables: [InfoAction],

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

  updatePermission: function(res) {
    if (res.canGo) {
      this.trigger({
        canGo: res.canGo
      });
    }
  }
});

export default InfoStore;

