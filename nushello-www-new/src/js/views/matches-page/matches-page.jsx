'use strict';
import _ from 'lodash';
import React from 'react';
import Reflux from 'reflux';
import Router from 'react-router';

import Match from 'components/matches/Match.jsx';
import MatchesStore from 'stores/matches-store';
import MatchesAction from 'actions/matches-action';
import FacebookShare from 'components/share/facebook-share.jsx';
import Permission from 'components/permission/permission.jsx';

let UserPermission = require('constants/user-permission.js');

export default class MatchesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { matches: {} };
  }

  componentDidMount() {
    this.unsubscribe = MatchesStore.listen(this.onStatusChange.bind(this), MatchesStore.onInitCompleted);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(res) {
    if (typeof res.matches !== 'undefined') {
      this.setState({
        matches: res.matches.data
      });
    }

    if (res.canGo) {
      this.setState({
        canGo: res.canGo
      });
      MatchesAction.init();
    }
  }

  render() {
    if ((typeof this.state.canGo === 'undefined') && (!this.state.canGo)) {
      return (
        <div>
          <Permission permission={UserPermission.EXISTING_USER_ONLY} />
        </div>
      );
    } else {
      let matches = [];
      if (!_.isEmpty(this.state.matches)) {
        matches = this.state.matches.map(function(match) {
          return (
            <Match key={match.id} userId={match.id} fakeName={match.fakeName} bio={match.bio} />
          );
        });
      }

      return (
        <div className="matches-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-3 col-sm-6 col-md-9 col-sm-offset-1">
                <h1>All Friend Matches</h1>
                <div className="row">
                  {matches}
                </div>
                <div className="row">
                  <FacebookShare appId="1467581460234203"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
