'use strict';

import _ from 'lodash';
import Reflux from 'reflux';
import ResidencePickerAction from 'actions/residence-picker-action';

let residences = null;
let selectedResidence = -1;

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
  },

  onSelectResidence: function(residenceId) {
    selectedResidence = residenceId;
    this.trigger({
      selectedResidence: selectedResidence
    });
  }

});

export default ResidencePickerStore;
