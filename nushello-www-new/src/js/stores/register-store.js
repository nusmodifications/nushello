'use strict';

import Reflux from 'reflux';
import RegisterAction from 'actions/register-action';
import ResidencePickerStore from 'stores/residence-picker-store';
import RegisterQuestionsStore from 'stores/register-questions-store';
import PermissionStore from 'stores/permission-store';

var RegisterStore = Reflux.createStore({
  listenables: [RegisterAction],

  init: function() {
    this.listenTo(RegisterQuestionsStore, this.updateAnswer);
    this.listenTo(ResidencePickerStore, this.updateResidence);
    this.listenTo(PermissionStore, this.updatePermission);
  },

  onRegister: function(res) {
  },

  onRegisterCompleted: function(res) {
    this.trigger({
      isRegisterd: true
    });
  },

  onRegisterFailed: function(res) {
    this.trigger({
      isRegisterd: false
    });
  },

  updateAnswer: function(res) {
    if (res.answers) {
      this.trigger({
        answers: res.answers
      });
    }
  },

  updateResidence: function(res) {
    if (res.selectedResidence) {
      this.trigger({
        residenceId: res.selectedResidence
      });
    }
  },

  updatePermission: function(res) {
    if (res.canGo) {
      this.trigger({
        canGo: res.canGo
      });
    }
  }

});

export default RegisterStore;
