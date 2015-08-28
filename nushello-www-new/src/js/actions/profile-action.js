'use strict';

import Reflux from 'reflux';
import ProfileAPI from 'utils/api/profile-api';

var ProfileAction = Reflux.createActions({
  'init': {asyncResult: true},
  'edit': {asyncResult: false}
});

ProfileAction.init.listen(function() {
  return ProfileAPI.init();
});

ProfileAction.edit.listen(function() {
});

export default ProfileAction;
