'use strict';

import Reflux from 'reflux';
import PickersAPI from 'utils/api/pickers-api';

var PickerAction = Reflux.createActions({
  'fetchResidences': {asyncResult: true}
});

PickerAction.fetchResidences.listenAndPromise(function(){
  return PickersAPI.fetchResidences();
});

export default PickerAction;
