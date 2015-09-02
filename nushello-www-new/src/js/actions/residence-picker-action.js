'use strict';

import Reflux from 'reflux';
import PickersAPI from 'utils/api/pickers-api';

var ResidencePickerAction = Reflux.createActions({
  'fetchResidences': {asyncResult: true}
});

ResidencePickerAction.fetchResidences.listenAndPromise(function(){
  return PickersAPI.fetchResidences();
});

export default ResidencePickerAction;
