'use strict';

import Reflux from 'reflux';
import ProfileAPI from 'utils/api/profile-api';

var PersonalInfoAction = Reflux.createActions({
  'edit': {asyncResult: true}
});

PersonalInfoAction.edit.listenAndPromise(function(data) {
  return ProfileAPI.editAll(data);
});

export default PersonalInfoAction;

