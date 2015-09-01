'use strict';

import _ from 'lodash';
import Reflux from 'reflux';
import IvleAuthAction from 'actions/ivle-auth-action';

var IvleAuthStore = Reflux.createStore({
  listenables: IvleAuthAction,

  onAuthCompleted: function(response) {
    // if (response.type === 'faculties') {
    //   faculties = response.data;
    // }

    // this.trigger({
    //   faculties: faculties
    // });
  },

  onAuthFailed: function() {
    // faculties = null;
    // this.trigger({
    //   faculties: faculties
    // });
  }

});

export default IvleAuthStore;
