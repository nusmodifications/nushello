'use strict';
import React from 'react';

require('./matches-page.scss');

export default class MatchesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-1">
              <h1>All Friend Matches</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
