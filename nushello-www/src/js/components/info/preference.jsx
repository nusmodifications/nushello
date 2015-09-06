'use strict';
import React from 'react';
import Reflux from 'reflux';
import Route from 'react-router';
import PreferenceAction from 'actions/preference-action';
import PreferenceStore from 'stores/preference-store';
import FacultyPicker from 'components/pickers/faculty-picker.jsx';
import MajorPicker from 'components/pickers/major-picker.jsx';

var PreferenceForm = React.createClass({
  mixins: [Reflux.connect(PreferenceStore), Route.Navigation],

  getInitialState: function() {
  },

  componentDidMount: function() {
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.goMatch) {
      this.transitionTo('/matches');
    }

    if (this.props.profile && !this.state.profile) {
      this.setState({
        profile: this.props.profile
      });
    }

    if (!this.state.gender && this.state.profile && this.state.profile.preference) {
      let gender = 'Both';
      if (this.state.profile.preference.gender) {
        gender = this.state.profile.preference.gender;
      }
      this.setState({
        gender: gender
      });
    }

    if (!this.state.personalities && this.state.profile) {
      let personalities = {};
      if (!this.state.profile.preference) {
        personalities.party = false;
        personalities.sports = false;
        personalities.mugger = false;
        personalities.introvert = false;
      } else {
        let preference = this.state.profile.preference;
        if (preference.party) {
          personalities.party = true;
        } else {
          personalities.party = false;
        }

        if (preference.sports) {
          personalities.sports = true;
        } else {
          personalities.sports = false;
        }

        if (preference.mugger) {
          personalities.mugger = true;
        } else {
          personalities.mugger = false;
        }

        if (preference.introvert) {
          personalities.introvert = true;
        } else {
          personalities.introvert = false;
        }
      }

      this.setState({
        personalities: personalities
      });
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    let preference = {
      preference: {
        'facultyId': this.state.selectedFacultyId,
        'majorId': this.state.selectedMajorId,
        ...this.state.personalities
      }
    };

    if (this.state.gender && (this.state.gender !== 'Both')) {
      preference.preference.gender = this.state.gender;
    } else {
      preference.preference.gender = null;
    }

    PreferenceAction.edit(preference);
  },

  selectGender: function(gender) {
    let self = this;
    return function() {
      if (self.state.gender === gender) {
        self.setState({
          gender: 'Both'
        });
      } else {
        self.setState({
          gender: gender
        });
      }
    };
  },

  togglePersonality: function(personality) {
    let self = this;
    return function() {
      let personalities = self.state.personalities;
      personalities[personality] = !personalities[personality];
      self.setState({
        personalities: personalities
      });
    };
  },

  render: function() {
    let profile = this.state.profile;
    let facultyId = 1;
    let majorId = 1;
    let gender = null;
    let personalities = null;

    if (typeof profile !== 'undefined') {
      if (profile.preference) {
        let preference = profile.preference;
        if (profile.facultyId) {
          facultyId = preference.facultyId;
          majorId = preference.majorId;
        }

        personalities = {
          party: preference.party,
          sports: preference.sports,
          mugger: preference.mugger,
          introvert: preference.introvert
        };
      }
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
        <div className="prefs">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1 page-title">
              <h1>I&#39;m looking for a friend whose...</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
              <FacultyPicker facultyId={facultyId}/>
              <MajorPicker facultyId={facultyId} majorId={majorId}/>

              <div className="form-group">
                  <label className="control-label">
                    and gender is:
                  </label>
                  <br />
                  <div className="gender-row btn-group" data-toggle='gender'>
                    <button
                    type="button"
                    onClick={ this.selectGender('Male') }
                    className={ maleClass }>
                    Male
                    </button>
                    <button
                    type="button"
                    onClick={ this.selectGender('Female') }
                    className={ femaleClass }>
                    Female
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label">
                    and personality is:
                  </label>
                  <br />
                  <div className="personality-row btn-group" data-toggle='personality'>
                    <button
                    type="button"
                    onClick={ this.togglePersonality('party') }
                    className={ partyClass }>
                      Party
                    </button>
                    <button
                    type="button"
                    onClick={ this.togglePersonality('sports') }
                    className={ sportsClass }>
                      Sports
                    </button>
                    <button
                    type="button"
                    onClick={ this.togglePersonality('mugger') }
                    className={ muggerClass }>
                      Mugger
                    </button>
                    <button
                    type="button"
                    onClick={ this.togglePersonality('introvert') }
                    className={ introvertClass }>
                      Introvert
                    </button>
                  </div>
                </div>

              <div className="pref-submit">
                <button className="btn btn-default" onClick={ this.handleSubmit }>
                  Alright, let's go!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PreferenceForm;
