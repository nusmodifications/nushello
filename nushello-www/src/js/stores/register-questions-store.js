'use strict';

import Reflux from 'reflux';
import RegisterQuestionsAction from 'actions/register-questions-action';

let isRegistered = false;
let answers = [undefined, undefined, undefined, undefined]; // need to figure this out

var RegisterQuestionsStore = Reflux.createStore({
  listenables: [RegisterQuestionsAction],

  onUpdateAnswer: function(res) {
    answers[res.id] = res.answer;
    this.trigger({
      answers: answers
    });
  }
});

export default RegisterQuestionsStore;

