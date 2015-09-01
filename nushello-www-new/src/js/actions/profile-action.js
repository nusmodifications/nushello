'use strict';

import Reflux from 'reflux';
import ProfileAPI from 'utils/api/profile-api';

var ProfileAction = Reflux.createActions({
  'init': {asyncResult: true},
  'edit': {asyncResult: true}
});

ProfileAction.init.listen(function() {
  return ProfileAPI.init()
    .then(this.completed)
    .catch(this.failed);
});

ProfileAction.edit.listen(function(bio) {
  return ProfileAPI.edit(bio)
    .then(this.completed)
    .catch(this.failed);
});

export default ProfileAction;

