'use strict';

import Reflux from 'reflux';
import AuthAPI from 'utils/api/auth-api';

var AuthAction = Reflux.createActions({
  'init': {asyncResult: true},
  'login': {asyncResult: true}
});

AuthAction.init.listenAndPromise(function(){
  return AuthAPI.init();
});

AuthAction.login.listen(function(userInfo){
  return AuthAPI.login(userInfo);
});

export default AuthAction;
