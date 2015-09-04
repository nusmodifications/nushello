'use strict';

import Reflux from 'reflux';
import MatchesAction from 'actions/matches-action';
import PermissionStore from 'stores/permission-store';

var MatchesStore = Reflux.createStore({
  listenables: [MatchesAction],

  init: function() {
    this.listenTo(PermissionStore, this.updatePermission);
  },

  onInitCompleted: function(res) {
    if (res) {
      this.trigger({
        matches: res
      });
    }
  },

  onInitFailed: function(response) {
    this.trigger(response);
  },

  updatePermission: function(res) {
    if (res.canGo) {
      this.trigger({
        canGo: res.canGo
      });
    }
  }

});

export default MatchesStore;
