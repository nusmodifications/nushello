'use strict';

import Reflux from 'reflux';
import ProfileAPI from 'utils/api/profile-api';

var InfoAction = Reflux.createActions({
  'init': {asyncResult: true}
});

InfoAction.init.listenAndPromise(function() {
  return ProfileAPI.init();
});


export default InfoAction;
