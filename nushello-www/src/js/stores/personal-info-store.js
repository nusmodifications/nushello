'use strict';

import Reflux from 'reflux';
import cookie from 'react-cookie';
import PersonalInfoAction from 'actions/preference-action';
import FacultyPickerStore from 'stores/faculty-picker-store';

var PersonalInfoStore = Reflux.createStore({
  listenables: [PersonalInfoAction],

  init: function() {
    this.listenTo(FacultyPickerStore, this.updateSelectedFaculty);
  },

  onEdit: function(res) {

  },

  onEditCompleted: function(res) {
    this.trigger({
      goMatch: true
    });
  },

  onEditFailed: function(res) {
    this.trigger(res);
  },

  updateSelectedFaculty: function(res) {
    this.trigger(res);
  }

});

export default PersonalInfoStore;

