'use strict';

import Reflux from 'reflux';
import PickersAPI from 'utils/api/pickers-api';

var FacultyPickerAction = Reflux.createActions({
  'fetchFaculties': {asyncResult: true},
  'selectFaculty': {asyncResult: true}
});

FacultyPickerAction.fetchFaculties.listenAndPromise(function() {
  return PickersAPI.fetchFaculties();
});

FacultyPickerAction.selectFaculty.listen(function(facultyId) {
  return facultyId;
});

export default FacultyPickerAction;
