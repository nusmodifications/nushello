'use strict';

import _ from 'lodash';
import Reflux from 'reflux';
import ResidencePickerAction from 'actions/residence-picker-action';

var faculties = null;
var residences = null;

var ResidencePickerStore = Reflux.createStore({
  listenables: ResidencePickerAction,

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

export default ResidencePickerStore;
