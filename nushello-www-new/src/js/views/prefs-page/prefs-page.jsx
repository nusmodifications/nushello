'use strict';
import React from 'react';
import Reflux from 'reflux';
import jquery from 'jquery';
import PreferenceAction from '../../actions/preference-action';
import PreferenceStore from '../../stores/preference-store';
import Permission from 'components/permission/permission.jsx';
import FacultyPicker from 'components/pickers/faculty-picker.jsx';
import MajorPicker from 'components/pickers/major-picker.jsx';

let UserPermission = require('constants/user-permission.js');
var PrefsPage = React.createClass({
  mixins: [Reflux.connect(PreferenceStore)],

  getInitialState: function() {
  },

  componentDidMount: function() {
  },

  componentDidUpdate: function(prevProps, prevState) {
    if ((typeof prevState.canGo === 'undefined') || (!prevState.canGo)) {
      if ((typeof this.state.canGo !== 'undefined') && (this.state.canGo)) {
        PreferenceAction.init();
      }
    }

    if (!this.state.gender && this.state.profile) {
      let gender = 'Both';
      if (this.state.profile.preference.gender) {
        gender = this.state.profile.preference.gender;
      }
      this.setState({
        gender: gender
      });
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    let preference = {
      preference: {
        'facultyId': this.state.selectedFacultyId,
        'majorId': this.state.selectedMajorId
      }
    };

    if (this.state.gender && (this.state.gender !== 'Both')) {
      preference.preference.gender = this.state.gender;
    } else {
      preference.preference.gender = null;
    }
    PreferenceAction.edit(preference);
  },

  toggleMale: function() {
    if (this.state.gender === 'Male') {
      this.setState({
        gender: 'Both'
      });
    } else {
      this.setState({
        gender: 'Male'
      });
    }
  },

  toggleFemale: function() {
    if (this.state.gender === 'Female') {
      this.setState({
        gender: 'Both'
      });
    } else {
      this.setState({
        gender: 'Female'
      });
    }
  },

  render: function() {
    if ((typeof this.state.canGo === 'undefined') || (!this.state.canGo)) {
      return (
        <div>
          <Permission permission={UserPermission.EXISTING_USER_ONLY} />
        </div>
      );
    } else {
      let profile = this.state.profile;
      let facultyId = 1;
      let majorId = 1;
      let gender = null;

      if (typeof profile !== 'undefined') {
        facultyId = profile.preference.facultyId;
        majorId = profile.preference.majorId;
      }

      var maleClass = 'btn btn-default';
      var femaleClass = 'btn btn-default';
      if (this.state.gender) {
        gender = this.state.gender;
      }

      if (gender === 'Male') {
        maleClass = `${maleClass} selected`;
      } else if (gender === 'Female') {
        femaleClass = `${femaleClass} selected`;
      }

      return (
        <div>
          <div className="container prefs">
            <div className="row">
              <div className="col-sm-7 col-sm-offset-1">
                <h1>I&#39;m looking for a friend whose...</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-sm-offset-1">
                <form>
                  <FacultyPicker facultyId={facultyId}/>
                  <MajorPicker facultyId={facultyId} majorId={majorId}/>

                  <div className="form-group">
                      <label className="control-label">
                        and gender is:
                      </label>
                      <br />
                       <div className="btn-group" data-toggle='gender'>
                          <button
                            type="button"
                            onClick={ this.toggleMale }
                            className={ maleClass }>
                            Male
                          </button>
                          <button
                            type="button"
                            onClick={ this.toggleFemale }
                            className={ femaleClass }>
                            Female
                          </button>
                       </div>
                   </div>

                  <input type="submit" className="btn btn-default" onClick={this.handleSubmit} defaultValue="Alright, let's go!" />
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
});

module.exports = PrefsPage;
