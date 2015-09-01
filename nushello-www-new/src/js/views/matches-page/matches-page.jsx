'use strict';
import React from 'react';
import Router from 'react-router';

import Match from '../../components/matches/Match.jsx';

require('./matches-page.scss');

export default class MatchesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { matches: [ {userId: 1, name: 'hot_guy', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {userId: 2, name: 'super_hot', bio: ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {userId: 3, name: 'a_guy', bio: 'Just a guy'},
    {userId: 4, name: 'another_guy', bio: 'Just a guy'},
    {userId: 5, name: 'lol', bio: 'Just a guy'} ]};
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
}
