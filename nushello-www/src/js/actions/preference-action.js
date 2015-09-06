'use strict';

import Reflux from 'reflux';
import ProfileAPI from 'utils/api/profile-api';

var PreferenceAction = Reflux.createActions({
  'edit': {asyncResult: true}
});

PreferenceAction.edit.listenAndPromise(function(data) {
  return ProfileAPI.editAll(data);
});

export default PreferenceAction;

