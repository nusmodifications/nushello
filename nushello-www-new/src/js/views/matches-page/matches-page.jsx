'use strict';
import React from 'react';
import Router from 'react-router';

import Match from '../../components/matches/Match.jsx';

require('./matches-page.scss');

export default class MatchesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { matches: [ {userId: 1, name: 'AGuyWith ALongName', bio: 'Just a guy', profilePictureUrl: ''},
    {userId: 2, name: 'Girl', bio: 'Just a girl', profilePictureUrl: ''} ]};
  }

  render() {
    let matches = this.state.matches.map(function(match) {
      return (
        <Match key={match.userId} name={match.name} bio={match.bio} picUrl={match.profilePictureUrl} />
        );
    });
    return (
      <div className="matches-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-1">
              <h1>All Friend Matches</h1>
                <div className="card">
                  <div className="content">
                    {matches}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
