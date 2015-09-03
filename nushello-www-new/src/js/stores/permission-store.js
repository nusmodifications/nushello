'use strict';

import _ from 'lodash';
import Reflux from 'reflux';
import PermissionAction from 'actions/permission-action';

let canGo;

var PermissionStore = Reflux.createStore({
  listenables: PermissionAction,

  onAuthenticateCompleted: function(response) {
    this.trigger({
      canGo: response
    });
  }

});

export default PermissionStore;
