'use strict';

import Reflux from 'reflux';
import MatchesAction from 'actions/matches-action';

var MatchesStore = Reflux.createStore({
  listenables: [MatchesAction],

  onInitCompleted: function(res) {
    if (res) {
      this.trigger({
        matches: res
      });
    }
  },

  onInitFailed: function(response) {
    this.trigger(response);
  }

});

export default MatchesStore;
