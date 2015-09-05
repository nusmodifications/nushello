'use strict';
import React from 'react';
import Reflux from 'reflux';
import Router from 'react-router';
import InfoAction from 'actions/info-action';
import InfoStore from 'stores/info-store';
import PreferenceForm from 'components/info/preference.jsx';
import PersonalInfoForm from 'components/info/personal-info.jsx';
import Permission from 'components/permission/permission.jsx';

let UserPermission = require('constants/user-permission.js');
var InfoPage = React.createClass({
  mixins: [Reflux.connect(InfoStore)],

  getInitialState: function() {
    return {
      isInPref: true
    };
  },

  componentDidMount: function() {
    InfoAction.init();
  },

  componentDidUpdate: function(prevProps, prevState) {
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
