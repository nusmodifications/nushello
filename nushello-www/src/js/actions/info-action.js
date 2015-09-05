'use strict';

import Reflux from 'reflux';
import ProfileAPI from 'utils/api/profile-api';

var InfoAction = Reflux.createActions({
  'init': {asyncResult: true},
  'edit': {asyncResult: true}
});

InfoAction.init.listenAndPromise(function() {
  return ProfileAPI.init();
});

InfoAction.edit.listenAndPromise(function(data) {
  return ProfileAPI.editAll(data);
});

export default InfoAction;

