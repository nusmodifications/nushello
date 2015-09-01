'use strict';
import React from 'react';
import Reflux from 'reflux';
import Router from 'react-router';

import Match from '../../components/matches/Match.jsx';
import MatchesStore from '../../stores/matches-store';
import MatchesAction from '../../actions/matches-action';

require('./matches-page.scss');

var MatchesPage = React.createClass({
  mixins: [Reflux.connect(MatchesStore, 'matches'), Router.Navigation],

  statics: {
    willTransitionTo: function(transition, params, query) {

    },

    willTransitionFrom: function(transition, component) {

    }
  },

  getInitialState: function() {
    return {matches: [{userId: 1, fakeName: 'johndoh!', bio: 'fake guy 5eva'}] };
  },

  componentWillMount: function() {
    MatchesAction.init();
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  render: function() {
    console.log(this.state.matches);
    let matches = this.state.matches.map(function(match) {
      return (
        <Match key={match.userId} fakeName={match.fakeName} bio={match.bio} />
        );
    });
    return (
      <div className="matches-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-3 col-sm-6 col-md-9 col-sm-offset-1">
              <h1>All Friend Matches</h1>
                <div className="row">
                    {matches}
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = MatchesPage;
