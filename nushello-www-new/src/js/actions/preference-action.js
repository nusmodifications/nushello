'use strict';

import Reflux from 'reflux';
import ProfileAPI from 'utils/api/profile-api';

var PreferenceAction = Reflux.createActions({
  'init': {asyncResult: true},
  'edit': {asyncResult: true}
});

PreferenceAction.init.listen(function() {
  return ProfileAPI.init();
});

PreferenceAction.edit.listen(function(data) {
  return ProfileAPI.editAll(data);
});

export default PreferenceAction;

