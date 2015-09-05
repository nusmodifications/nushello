'use strict';

import Reflux from 'reflux';
import cookie from 'react-cookie';
import PreferenceAction from 'actions/preference-action';
import FacultyPickerStore from 'stores/faculty-picker-store';

var PreferenceStore = Reflux.createStore({
  listenables: [PreferenceAction],

  init: function() {
    this.listenTo(FacultyPickerStore, this.updateSelectedFaculty);
  },

  onInit: function(res) {
  },

  onInitCompleted: function(res) {
    if (res.type === 'userProfile') {
      this.trigger({
        profile: res.data
      });
    }
  },

  onInitFailed: function(msg) {
    this.trigger(msg);
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

export default PreferenceStore;

