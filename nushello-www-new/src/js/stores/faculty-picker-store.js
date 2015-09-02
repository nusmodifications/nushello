'use strict';

import _ from 'lodash';
import Reflux from 'reflux';
import FacultyPickersAction from 'actions/faculty-picker-action';

let faculties = null;
let selectedFacultyId = 1;

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

  onFetchFacultiesCompleted: function(response) {
    if (response.type === 'faculties') {
      faculties = response.data;
    }

    this.trigger({
      faculties: faculties,
      selectedFacultyId: selectedFacultyId
    });
  },

  onFetchFacultiesFailed: function() {
    faculties = null;
    this.trigger({
      faculties: faculties,
      selectedFacultyId: -1
    });
  }

});

export default FacultyPickerStore;
