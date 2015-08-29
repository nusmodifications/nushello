'use strict';

import _ from 'lodash';
import Reflux from 'reflux';
import ProfileAction from 'actions/profile-action';

var ProfileStore = Reflux.createStore({
  listenables: ProfileAction,

  getInitialState: function(url) {
    ProfileAction.init()
      .then(res => {
        this.trigger(res);
      });
  }

});

export default ProfileStore;

