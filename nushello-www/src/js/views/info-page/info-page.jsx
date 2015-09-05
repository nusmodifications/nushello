'use strict';
import React from 'react';
import Reflux from 'reflux';
import Router from 'react-router';
import InfoAction from 'actions/info-action';
import InfoStore from 'stores/info-store';
import PreferenceForm from 'components/info/preference.jsx';
import Permission from 'components/permission/permission.jsx';

let UserPermission = require('constants/user-permission.js');
var InfoPage = React.createClass({
  mixins: [Reflux.connect(InfoStore)],

  componentDidMount: function() {
  },

  componentDidUpdate: function(prevProps, prevState) {
  },

  render: function() {
    if ((typeof this.state.canGo === 'undefined') || (!this.state.canGo)) {
      return (
        <div>
          <Permission permission={UserPermission.EXISTING_USER_ONLY} />
        </div>
      );
    } else {
      return (
        <PreferenceForm />
      );
    }
  }
});

module.exports = InfoPage;
