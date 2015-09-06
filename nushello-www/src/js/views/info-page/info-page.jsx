'use strict';
import React from 'react';
import Reflux from 'reflux';
import Router from 'react-router';
import InfoAction from 'actions/info-action';
import InfoStore from 'stores/info-store';
import PreferenceForm from 'components/info/preference.jsx';
import PersonalInfoForm from 'components/info/personal-info.jsx';
import Permission from 'components/permission/permission.jsx';
import FacultyPicker from 'components/pickers/faculty-picker.jsx';
import MajorPicker from 'components/pickers/major-picker.jsx';

let UserPermission = require('constants/user-permission.js');
var InfoPage = React.createClass({
  mixins: [Reflux.connect(InfoStore), Router.Navigation],

  getInitialState: function() {
    return {
      isInPref: true
    };
  },

  componentDidMount: function() {
    InfoAction.init();
  },

  componentDidUpdate: function(prevProps, prevState) {
    if ((typeof prevState.canGo === 'undefined') || (!prevState.canGo)) {
      if ((typeof this.state.canGo !== 'undefined') && (this.state.canGo)) {
        InfoAction.init();
      }
    }

    if (this.state.goMatch) {
      this.transitionTo('/matches');
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

    InfoAction.edit(preference);
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

  showPreference: function() {
    this.setState({
      isInPref: true
    });
  },

  showInfo: function() {
    this.setState({
      isInPref: false
    });
  },

  render: function() {
    if ((typeof this.state.canGo === 'undefined') || (!this.state.canGo)) {
      return (
        <div>
          <Permission permission={UserPermission.EXISTING_USER_ONLY} />
        </div>
      );
    } else {
      let prefClass = 'btn btn-default tab-btn';
      let infoClass = 'btn btn-default tab-btn';
      let isInPref = false;
      if (this.state.isInPref) {
        prefClass = `${prefClass} selected`;
        isInPref = true;
      } else {
        infoClass = `${infoClass} selected`;
      }
      let prefForm = <PreferenceForm profile={ this.state.profile } />;
      let infoForm = <PersonalInfoForm profile={ this.state.profile } />;

      return (
        <div className="info-page">
          <div className="tab-row">
            <div className="btn-group" data-toggle='tab'>
              <button
              type="button"
              onClick={ this.showPreference }
              className={ prefClass }>
              preference
              </button>
              <button
              type="button"
              onClick={ this.showInfo }
              className={ infoClass }>
              personal info
              </button>
            </div>
          </div>
          { isInPref ? prefForm : infoForm }
        </div>
      );
    }
  }
});

module.exports = InfoPage;
