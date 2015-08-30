'use strict';

import _ from 'lodash';
import Reflux from 'reflux';
import PickersAction from 'actions/pickers-action';

var faculties = null;
var residences = null;

var PickersStore = Reflux.createStore({
  listenables: PickersAction,

  getFaculties: function() {
    return faculties;
  },

  getResidences: function() {
    return residences;
  },

  onFetchFacultiesCompleted: function(response) {
    if (response.type === 'faculties') {
      faculties = response.data;
    }

    this.trigger({
      faculties: faculties
    });
  },

  onFetchFacultiesFailed: function() {
    faculties = null;
    this.trigger({
      faculties: faculties
    });
  },

  onFetchResidencesCompleted: function(response) {
    if (response.type === 'residences') {
      residences = response.data;
    }

    this.trigger({
      residences: residences
    });
  },

  onFetchResidencesFailed: function() {
    residences = null;
    this.trigger({
      residences: residences
    });
  }

});

export default PickersStore;
