'use strict';

import Reflux from 'reflux';
import ProfileAPI from 'utils/api/profile-api';

var RegisterQuestionsAction = Reflux.createActions({
  'updateAnswer': {asyncResult: true}
});

RegisterQuestionsAction.updateAnswer.listen(function(data) {
  return data;
});

export default RegisterQuestionsAction;
