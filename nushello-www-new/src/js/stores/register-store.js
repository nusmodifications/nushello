'use strict';

import Reflux from 'reflux';
import RegisterAction from 'actions/register-action';
import ResidencePickerStore from 'stores/residence-picker-store';
import RegisterQuestionsStore from 'stores/register-questions-store';
import PermissionStore from 'stores/permission-store';

let isRegistered = false;
let answers = null;
let residenceId = -1;
let canGo;

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
      answers = res.answers;
      this.trigger({
        answers: answers
      });
    }
  },

  updateResidence: function(res) {
    if (res.selectedResidence) {
      residenceId = res.selectedResidence;
      this.trigger({
        residenceId: residenceId
      });
    }
  },

  updatePermission: function(res) {
    if (res.canGo) {
      canGo = res.canGo;
      this.trigger({
        canGo: canGo
      });
    }
  }

});

export default RegisterStore;
