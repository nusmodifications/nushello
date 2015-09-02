'use strict';
import _ from 'lodash';
import React from 'react';
import Reflux from 'reflux';
import Router from 'react-router';

import Match from 'components/matches/Match.jsx';
import MatchesStore from 'stores/matches-store';
import MatchesAction from 'actions/matches-action';
import FacebookShare from 'components/share/facebook-share.jsx';

export default class MatchesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { matches: {} };
  }

  componentWillMount() {
    MatchesAction.init();
  }

  componentDidMount() {
    this.unsubscribe = MatchesStore.listen(this.onStatusChange.bind(this), MatchesStore.onInitCompleted);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(res) {
    this.setState({ matches: res.matches.data });
  }

  render() {
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
