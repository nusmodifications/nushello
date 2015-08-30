'use strict';

import Reflux from 'reflux';
import PickersAPI from 'utils/api/pickers-api';

var PickerAction = Reflux.createActions({
  'fetchFaculties': {asyncResult: true},
  'fetchResidences': {asyncResult: true}
});

PickerAction.fetchFaculties.listenAndPromise(function(){
  return PickersAPI.fetchFaculties();
});

PickerAction.fetchResidences.listenAndPromise(function(){
  return PickersAPI.fetchResidences();
});

export default PickerAction;
