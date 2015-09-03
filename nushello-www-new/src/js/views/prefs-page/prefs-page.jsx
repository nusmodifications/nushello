'use strict';
import React from 'react';

import PrefsForm from 'components/preferences/prefs-form.jsx';

export default class PrefsPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
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
