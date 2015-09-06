'use strict';

import Reflux from 'reflux';
import cookie from 'react-cookie';
import InfoAction from 'actions/info-action';
import PermissionStore from 'stores/permission-store';
import FacultyPickerStore from 'stores/faculty-picker-store';

var InfoStore = Reflux.createStore({
  listenables: [InfoAction],

  init: function() {
    this.listenTo(FacultyPickerStore, this.updateSelectedFaculty);
    this.listenTo(PermissionStore, this.updatePermission);
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

  updatePermission: function(res) {
    if (!(typeof res.canGo === 'undefined')) {
      this.trigger({
        canGo: res.canGo
      });
    }
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

export default InfoStore;

