'use strict';

import Reflux from 'reflux';
import ProfileAPI from 'utils/api/profile-api';

var ProfileAction = Reflux.createActions({
  'init': {asyncResult: true}
});

ProfileAction.init.listen(function() {
  return ProfileAPI.init()
    .then(this.completed)
    .catch(this.failed);
});

export default ProfileAction;

