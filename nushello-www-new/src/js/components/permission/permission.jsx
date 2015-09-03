'use strict';
import React from 'react';
import Reflux from 'reflux';
import Router from 'react-router';

import PermissionAction from 'actions/permission-action';
import PermissionStore from 'stores/permission-store';

var Permission = React.createClass({
  mixins: [Reflux.connect(PermissionStore), Router.Navigation],

  componentWillMount: function() {
    PermissionAction.authenticate(this.props.permission);
  },

  componentDidUpdate: function() {
    if ((typeof this.state.canGo !== 'undefined') && (!this.state.canGo)) {
      this.transitionTo('/');
    }
  },

  render: function() {
    return (
      <div></div>
    );
  }
});

module.exports = Permission;
