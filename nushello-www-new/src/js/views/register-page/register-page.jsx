'use strict';
import _ from 'lodash';
import React from 'react';
import Reflux from 'reflux';
import Router from 'react-router';

import IvleLogin from 'components/login/ivle-login.jsx';
import ResidencePicker from 'components/pickers/residence-picker.jsx';
import RegisterQuestion from 'components/register-question/register-question.jsx';
import RegisterQuestions from 'components/register-question/register-questions.jsx';
import IvleAuthAction from 'actions/ivle-auth-action';
import IvleAuthStore from 'stores/ivle-auth-store';
import RegisterAction from 'actions/register-action';
import RegisterStore from 'stores/register-store';

require('./register-page.scss');

var RegisterPage = React.createClass({
  mixins: [Reflux.connect(IvleAuthStore), Reflux.connect(RegisterStore), Router.Navigation],

  handleToken: function(nusnetId, token) {
    IvleAuthAction.auth(nusnetId, token);
  },

  validateForm: function() {
    let isIvleAuthenticated = this.state.ivleAuthenticated;
    let isPersonalityFilled = false;
    if (this.state.answers) {
      isPersonalityFilled = true;
      for (let [index, elem] of this.state.answers.entries()) {
        if (typeof elem === 'undefined') {
          isPersonalityFilled = false;
        }
      }
    }

    return isIvleAuthenticated && isPersonalityFilled;
  },

  register: function(e) {
    e.preventDefault();
    const { residenceId, answers } = this.state;
    let data = {
      personality: {
        party: answers[0],
        sports: answers[1],
        mugger: answers[2],
        introvert: answers[3]
      }
    };

    if (!residenceId || residenceId !== -1) {
      // need to config this
      data.residenceId = residenceId;
    }

    RegisterAction.register(data);
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.isRegisterd) {
      this.transitionTo('matches');
    }
  },

  render: function() {
    let ivleLogin = <IvleLogin tokenHandler={ this.handleToken } />;
    let ivlePassed = <div>OK</div>;
    let isIvleLoggedIn = this.state.ivleAuthenticated;

    let proceedButton = <button onClick={ this.register } className="btn btn-default">Register</button>;
    let isFormValidated = this.validateForm();

    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Register</h1>
        <hr/>
          <ResidencePicker />
          <RegisterQuestions />
          <div>
            Please login via IVLE
          </div>
          { isIvleLoggedIn ? ivlePassed : ivleLogin }
          { isFormValidated ? proceedButton : null}
      </div>
    );
  }
});

module.exports = RegisterPage;
