'use strict';

import Reflux from 'reflux';
import ProfileAPI from 'utils/api/profile-api';

var ProfileAction = Reflux.createActions({
  'init': {asyncResult: true},
  'edit': {asyncResult: true}
});

ProfileAction.init.listenAndPromise(function() {
  return ProfileAPI.init();
});

ProfileAction.edit.listenAndPromise(function(bio) {
  return ProfileAPI.edit(bio);
});

export default ProfileAction;

