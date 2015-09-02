'use strict';

import Reflux from 'reflux';
import ProfileAPI from 'utils/api/profile-api';

var RegisterAction = Reflux.createActions({
  'register': {asyncResult: true}
});

RegisterAction.register.listenAndPromise( function(data) {
  return ProfileAPI.editAll(data);
});

export default RegisterAction;
