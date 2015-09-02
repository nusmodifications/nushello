'use strict';

import Reflux from 'reflux';
import RegisterAction from 'actions/register-action';

var isRegistered = false;

var RegisterStore = Reflux.createStore({
  listenables: [RegisterAction],

  onRegister: function(res) {
  },

  onRegisterCompleted: function(res) {
    this.trigger({
      isRegisterd: true
    });
  },

  onRegisterFailed: function(res) {
    this.trigger({
      isRegisterd: false
    });
  }

});

export default RegisterStore;

