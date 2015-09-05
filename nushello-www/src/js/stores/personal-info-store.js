'use strict';

import Reflux from 'reflux';
import cookie from 'react-cookie';
import PersonalInfoAction from 'actions/preference-action';
import ResidencePickerStore from 'stores/residence-picker-store';
import RegisterQuestionsStore from 'stores/register-questions-store';

var PersonalInfoStore = Reflux.createStore({
  listenables: [PersonalInfoAction],

  init: function() {
    this.listenTo(ResidencePickerStore, this.updateSelectedResidence);
    this.listenTo(RegisterQuestionsStore, this.updateRegisterQuestions);
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

  updateSelectedResidence: function(res) {
    this.trigger(res);
  },

  updateRegisterQuestions: function(res) {
    this.trigger(res);
  }

});

export default PersonalInfoStore;

