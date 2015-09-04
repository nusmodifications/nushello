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
    return {
      male: false,
      female: false
    };
  },

  componentDidMount: function() {
  },

  componentDidUpdate: function(prevProps, prevState) {
    if ((typeof prevState.canGo === 'undefined') || (!prevState.canGo)) {
      if ((typeof this.state.canGo !== 'undefined') && (this.state.canGo)) {
        PreferenceAction.init();
      }
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    console.log(this.state);
  },

  toggleMale: function() {
    console.log(this.state);
    this.setState({
      male: !this.state.male
    });
  },

  toggleFemale: function() {
    this.setState({
      female: !this.state.female
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
      let profile = this.state.profile;
      let preference = null;

      if (typeof profile !== 'undefined') {
        preference = profile.preference;
      }
      var maleClass = 'btn btn-default';
      var femaleClass = 'btn btn-default';
      if (this.state && this.state.male) {
        maleClass = `${maleClass} selected`;
      }
      if (this.state && this.state.female) {
        femaleClass = `${femaleClass} selected`;
      }

      return (
        <div>
          <div className="container prefs">
            <div className="row">
              <div className="col-sm-7 col-sm-offset-1">
                <h1>I'm looking for a friend whose...</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-sm-offset-1">
                <form>
                  <FacultyPicker />
                  <MajorPicker />

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

                  <input className="btn btn-default" onClick={this.handleSubmit} value="Alright, let's go!" />
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
