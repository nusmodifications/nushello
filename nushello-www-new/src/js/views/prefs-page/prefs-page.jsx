'use strict';
import React from 'react';
import Reflux from 'reflux';
import PrefsForm from 'components/preferences/prefs-form.jsx';
import PreferenceAction from '../../actions/preference-action';
import PreferenceStore from '../../stores/preference-store';
import Permission from 'components/permission/permission.jsx';

let UserPermission = require('constants/user-permission.js');
var PrefsPage = React.createClass({
  mixins: [Reflux.connect(PreferenceStore)],

  componentDidUpdate: function(prevProps, prevState) {
    if ((typeof prevState.canGo === 'undefined') || (!prevState.canGo)) {
      if ((typeof this.state.canGo !== 'undefined') && (this.state.canGo)) {
        PreferenceAction.init();
      }
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
      let preference = null;
      if (typeof profile !== 'undefined') {
        preference = profile.preference;
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
              <PrefsForm preference={preference}/>
            </div>
          </div>
        </div>
      );
    }
  }
});

module.exports = PrefsPage;
