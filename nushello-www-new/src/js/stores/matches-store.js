'use strict';

import Reflux from 'reflux';
import MatchesAction from 'actions/matches-action';

var matches;

var MatchesStore = Reflux.createStore({
  listenables: MatchesAction,

  onInitCompleted: function(response) {
    if (response) {
      matches = response;

      this.trigger({
        matches: matches
      });
    }
  },

  onInitFailed: function(response) {
    this.trigger(response);
  }

});

export default MatchesStore;
