'use strict';

import _ from 'lodash';
import Reflux from 'reflux';
import FacultyPickersAction from 'actions/faculty-picker-action';

let faculties = null;

var FacultyPickerStore = Reflux.createStore({
  listenables: FacultyPickersAction,

  getFaculties: function() {
    return faculties;
  },

  onSelectFaculty: function(response) {
    this.trigger({
      selectedFacultyId: response
    });
  },

  onSelectMajor: function(response) {
    this.trigger({
      selectedMajorId: response
    });
  },

  onFetchFacultiesCompleted: function(response) {
    if (response.type === 'faculties') {
      faculties = response.data;
    }

    this.trigger({
      faculties: faculties,
      selectedFacultyId: 1,
      selectedMajorId: 1
    });
  },

  onFetchFacultiesFailed: function() {
    faculties = null;
    this.trigger({
      faculties: faculties,
      selectedFacultyId: -1,
      selectedMajorId: -1
    });
  }

});

export default FacultyPickerStore;
