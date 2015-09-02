'use strict';

import _ from 'lodash';
import Reflux from 'reflux';
import IvleAuthAction from 'actions/ivle-auth-action';

let ivleAuthenticated = false;

var IvleAuthStore = Reflux.createStore({
  listenables: IvleAuthAction,

  onAuthCompleted: function(response) {
    console.log(response);
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
