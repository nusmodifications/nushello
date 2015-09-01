'use strict';

import Reflux from 'reflux';
import IvleAuthAPI from 'utils/api/ivle-auth-api';

var IvleAuthAction = Reflux.createActions({
  'auth': {asyncResult: true}
});

IvleAuthAction.auth.listenAndPromise( function() {
  return IvleAuthAPI.auth();
});

export default IvleAuthAction;

