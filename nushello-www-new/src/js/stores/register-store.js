'use strict';

import Reflux from 'reflux';
import RegisterAction from 'actions/register-action';
import RegisterQuestionsStore from 'stores/register-questions-store';

let isRegistered = false;
let answers = null;

var RegisterStore = Reflux.createStore({
  listenables: [RegisterAction],

  init: function() {
    this.listenTo(RegisterQuestionsStore, this.updateAnswer);
  },

  onRegister: function(res) {
  },

  onRegisterCompleted: function(res) {
    this.trigger({
      isRegisterd: true,
      answers: answers
    });
  },

  onRegisterFailed: function(res) {
    this.trigger({
      isRegisterd: false,
      answers: answers
    });
  },

  updateAnswer: function(newAnswers) {
    answers = newAnswers.answers;
    this.trigger({
      answers: answers
    });
  }

});

export default RegisterStore;
