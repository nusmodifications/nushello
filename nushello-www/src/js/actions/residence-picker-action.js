'use strict';

import Reflux from 'reflux';
import PickersAPI from 'utils/api/pickers-api';

var ResidencePickerAction = Reflux.createActions({
  'fetchResidences': {asyncResult: true},
  'selectResidence': {asyncResult: true}
});

ResidencePickerAction.fetchResidences.listenAndPromise(function(){
  return PickersAPI.fetchResidences();
});

ResidencePickerAction.selectResidence.listen(function(residenceId){
  return residenceId;
});

export default ResidencePickerAction;
