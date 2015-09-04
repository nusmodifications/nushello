'use strict';

import Reflux from 'reflux';
import MatchesAPI from 'utils/api/matches-api';

var MatchesAction = Reflux.createActions({
  'init': {asyncResult: true}
});

MatchesAction.init.listenAndPromise(function(){
  return MatchesAPI.init();
});

export default MatchesAction;
