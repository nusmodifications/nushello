'use strict';

import Reflux from 'reflux';
import AuthAPI from 'utils/api/auth-api';

var AuthAction = Reflux.createActions({
  'init': {asyncResult: true},
  'login': {asyncResult: true},
  'authenticate': {asyncResult: true}
});

AuthAction.init.listenAndPromise(function(){
  return AuthAPI.init();
});

AuthAction.login.listenAndPromise(function(userInfo){
  return AuthAPI.login(userInfo);
});

AuthAction.authenticate.listenAndPromise(function(permission){
  return AuthAPI.authenticate(permission);
});

export default AuthAction;
