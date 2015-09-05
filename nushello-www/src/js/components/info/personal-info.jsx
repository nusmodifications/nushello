'use strict';
import React from 'react';
import Reflux from 'reflux';
import Route from 'react-router';
import PersonalInfoAction from 'actions/personal-info-action';
import PersonalInfoStore from 'stores/personal-info-store';
import ResidencePicker from 'components/pickers/residence-picker.jsx';
import RegisterQuestion from 'components/register-question/register-question.jsx';
import RegisterQuestions from 'components/register-question/register-questions.jsx';

var PersonalInfoForm = React.createClass({
  mixins: [Reflux.connect(PersonalInfoStore), Route.Navigation],

  componentDidMount: function() {
    if (this.props.profile && !this.state.profile) {
      this.setState({
        profile: this.props.profile
      });
    }

    if (this.props.profile && !this.state.personalities) {
      this.setState({
        personalities: this.props.profile.personality
      });
    }
  },

  componentDidUpdate: function(prevProps, prevState) {
  },

  handleSubmit: function(e) {
  },

  render: function() {
    console.log(this.state);
    let profile = this.state.profile;
    let residenceId = -1;
    let personalities = this.state.personalities;

    if ((typeof profile !== 'undefined') && (profile.personality)) {
      residenceId = profile.residenceId;
      personalities = {
        party: profile.personality.party,
        sports: profile.personality.sports,
        mugger: profile.personality.mugger,
        introvert: profile.personality.introvert
      };
    }

    if (this.state.personalities) {
      personalities = this.state.personalities;
    }

    return (
      <div>
        <div className="personal-info">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1 page-title">
              <h1>Here is my personal information</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
              <ResidencePicker />
              <RegisterQuestions personalities={ personalities } />
              <div className='info-submit'>
                <button onClick={ this.handleSubmit } className="btn btn-default">
                  Update my information
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PersonalInfoForm;
