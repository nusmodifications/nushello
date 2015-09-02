'use strict';
import _ from 'lodash';
import React from 'react';
import Reflux from 'reflux';
import IvleLogin from 'components/login/IvleLogin.jsx';
import ResidencePicker from 'components/pickers/residence-picker.jsx';
import RegisterQuestion from 'components/register-question/register-question.jsx';
import IvleAuthAction from 'actions/ivle-auth-action';
import IvleAuthStore from 'stores/ivle-auth-store';
import PickersAction from 'actions/pickers-action';
import PickersStore from 'stores/pickers-store';
import RegisterAction from 'actions/register-action';
import RegisterStore from 'stores/register-store';

require('./register-page.scss');

var RegisterPage = React.createClass({
  mixins: [Reflux.connect(PickersStore), Reflux.connect(IvleAuthStore), Reflux.connect(RegisterStore)],

  getInitialState: function() {
    return {
      answers: [undefined, undefined, undefined, undefined], // need to figure this out
      residenceId: -1
    };
  },

  componentWillMount: function() {
    PickersAction.fetchResidences();
  },

  handleQuestion: function(id, answer) {
    var newAnswers = this.state.answers;
    newAnswers[id] = answer;
    this.setState({
      answer: newAnswers
    });
  },

  handleToken: function(nusnetId, token) {
    IvleAuthAction.auth(nusnetId, token);
  },

  validateForm: function() {
    let isIvleAuthenticated = this.state.ivleAuthenticated;
    let isPersonalityFilled = true;

    for (let [index, elem] of this.state.answers.entries()) {
      if (typeof elem === 'undefined') {
        isPersonalityFilled = false;
      }
    }

    return isIvleAuthenticated && isPersonalityFilled;
  },

  register: function(e) {
    e.preventDefault();
    const { residenceId, answers } = this.state;
    RegisterAction.register({
      residenceId: residenceId,
      presonality: {
        party: answers[0],
        sports: answers[1],
        mugger: answers[2],
        introvert: answers[3]
      }
    });
  },

  render: function() {
    let isResidencesFatched = false;
    if (!_.isEmpty(this.state.residences)) {
      isResidencesFatched = true;
    }

    let ivleLogin = <IvleLogin tokenHandler={ this.handleToken } />;
    let ivlePassed = <div>OK</div>;
    let isIvleLoggedIn = this.state.ivleAuthenticated;

    let proceedButton = <button onClick={ this.register } className="btn btn-default">Register</button>;
    let isFormValidated = this.validateForm();

    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Register</h1>
        <hr/>
        <form>
          <ResidencePicker residences={ isResidencesFatched ? this.state.residences : [] }/>
          <RegisterQuestion
            handler={ this.handleQuestion }
            questionId={ 0 }
            text="It's a Friday night, would you stay home or head out for a drink?"
            yesText="Party"
            noText="Stay home"
          />
          <RegisterQuestion
            handler={ this.handleQuestion }
            questionId={ 1 }
            text="Do you play any sports?"
          />
          <RegisterQuestion
            handler={ this.handleQuestion }
            questionId={ 2 }
            text="It’s the finals period and your friend’s birthday party is here, what would you do?"
            yesText="Party"
            noText="Stay of course"
          />
          <RegisterQuestion
            handler={ this.handleQuestion }
            questionId={ 3 }
            text="Do you find that you are more of an introvert or more of an extrovert?"
            yesText="Introvert"
            noText="Extrovert"
          />
          <div>
            Please login via IVLE
          </div>
          { isIvleLoggedIn ? ivlePassed : ivleLogin }
          { isFormValidated ? proceedButton : null}
        </form>
      </div>
    );
  }
});

module.exports = RegisterPage;
