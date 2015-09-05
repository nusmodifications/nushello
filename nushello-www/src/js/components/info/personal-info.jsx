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

  getInitialState: function() {
  },

  componentDidMount: function() {
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (this.props.profile && !this.state.profile) {
      this.setState({
        profile: this.props.profile
      });
    }
  },

  handleSubmit: function(e) {
  },

  render: function() {
    let profile = this.state.profile;
    let facultyId = 1;
    let majorId = 1;
    let gender = null;
    let personalities = null;

    if ((typeof profile !== 'undefined') && (profile.preference)) {
      let preference = profile.preference;
      facultyId = preference.facultyId;
      majorId = preference.majorId;
      personalities = {
        party: preference.party,
        sports: preference.sports,
        mugger: preference.mugger,
        introvert: preference.introvert
      };
    }

    var maleClass = 'btn btn-default gender-btn';
    var femaleClass = 'btn btn-default gender-btn';
    if (this.state.gender) {
      gender = this.state.gender;
    }
    if (gender === 'Male') {
      maleClass = `${maleClass} selected`;
    } else if (gender === 'Female') {
      femaleClass = `${femaleClass} selected`;
    }

    var partyClass = 'btn btn-default personality-btn';
    var sportsClass = 'btn btn-default personality-btn';
    var muggerClass = 'btn btn-default personality-btn';
    var introvertClass = 'btn btn-default personality-btn';
    if (this.state.personalities) {
      personalities = this.state.personalities;
    }
    if (personalities) {
      if (personalities.party) {
        partyClass = `${partyClass} selected`;
      }
      if (personalities.sports) {
        sportsClass = `${sportsClass} selected`;
      }
      if (personalities.mugger) {
        muggerClass = `${muggerClass} selected`;
      }
      if (personalities.introvert) {
        introvertClass = `${introvertClass} selected`;
      }
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
              <RegisterQuestions />
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
