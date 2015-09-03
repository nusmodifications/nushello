'use strict';
import React from 'react';

import PrefsForm from 'components/preferences/prefs-form.jsx';
import PreferenceAction from '../../actions/preference-action';
import PreferenceStore from '../../stores/preference-store';
import Permission from 'components/permission/permission.jsx';

let UserPermission = require('constants/user-permission.js');

export default class PrefsPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    if ((typeof this.state.canGo === 'undefined') && (!this.state.canGo)) {
      return (
        <div>
          <Permission permission={UserPermission.EXISTING_USER_ONLY} />
        </div>
      );
    } else {
      return (
        <div>
          <div className="container prefs">
            <div className="row">
              <div className="col-sm-7 col-sm-offset-1">
                <h1>I'm looking for a friend whose...</h1>
              </div>
            </div>
            <div className="row">
              <PrefsForm hah="aa"/>
            </div>
          </div>
        </div>
      );
    }
  }
}
