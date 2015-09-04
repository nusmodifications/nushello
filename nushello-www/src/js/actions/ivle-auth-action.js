'use strict';

import Reflux from 'reflux';
import IvleAuthAPI from 'utils/api/ivle-auth-api';

var IvleAuthAction = Reflux.createActions({
  'auth': {asyncResult: true}
});

IvleAuthAction.auth.listenAndPromise( function(nusnetId, ivleToken) {
  return IvleAuthAPI.auth(nusnetId, ivleToken);
});

export default IvleAuthAction;

