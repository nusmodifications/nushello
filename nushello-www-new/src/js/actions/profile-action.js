'use strict';

import Reflux from 'reflux';
import ProfileAPI from 'utils/api/profile-api';

var ProfileAction = Reflux.createActions({
  'init': {asyncResult: true},
  'edit': {asyncResult: false}
});

ProfileAction.init.listenAndPromise(function() {
  return ProfileAPI.init();
});

export default ProfileAction;

