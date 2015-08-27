'use strict';

import Reflux from 'reflux';
import AuthAPI from 'utils/api/auth-api';

var AuthAction = Reflux.createActions({
  'init': {asyncResult: true},
  'logout': {asyncResult: true},
  'login': {asyncResult: true}
});

AuthAction.init.listenAndPromise(function(){
  return AuthAPI.init();
});

AuthAction.logout.listenAndPromise(function(){
  return AuthAPI.logout();
});

AuthAction.login.listenAndPromise(function(userInfo){
  return AuthAPI.login(userInfo);
});

export default AuthAction;
