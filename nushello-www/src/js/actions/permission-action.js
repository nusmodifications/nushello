'use strict';

import Reflux from 'reflux';
import AuthAPI from 'utils/api/auth-api';

var PermissionAction = Reflux.createActions({
  'authenticate': {asyncResult: true}
});

PermissionAction.authenticate.listenAndPromise(function(permission) {
  return AuthAPI.authenticate(permission);
});

export default PermissionAction;
