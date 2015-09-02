'use strict';

import _ from 'lodash';
import Reflux from 'reflux';
import IvleAuthAction from 'actions/ivle-auth-action';

var ivleAuthenticated = false;

var IvleAuthStore = Reflux.createStore({
  listenables: IvleAuthAction,

  onAuthCompleted: function(response) {
    if (response.type === 'ivleAuthenticated') {
      this.trigger({
        ivleAuthenticated: true
      });
    }
  },

  onAuthFailed: function() {
    this.trigger({
      ivleAuthenticated: false
    });
  }

});

export default IvleAuthStore;
